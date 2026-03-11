/**
 * Translation Fallback Mechanism
 * Provides utilities for handling missing translations by falling back to English
 */

import { type Locale, defaultLocale } from './config';

// Type for nested translation messages
export type NestedMessages = {
  [key: string]: string | NestedMessages | string[];
};

// Cache for loaded messages
const messagesCache: Partial<Record<Locale, NestedMessages>> = {};

/**
 * Load messages for a specific locale
 * Returns cached messages if available
 */
export async function loadMessages(locale: Locale): Promise<NestedMessages> {
  if (messagesCache[locale]) {
    return messagesCache[locale]!;
  }

  try {
    const messages = await import(`../../../messages/${locale}.json`);
    messagesCache[locale] = messages.default;
    return messages.default;
  } catch {
    // If locale file doesn't exist, return empty object
    // Fallback will handle missing keys
    return {};
  }
}

/**
 * Load English messages (used as fallback)
 */
export async function loadEnglishMessages(): Promise<NestedMessages> {
  return loadMessages(defaultLocale);
}

/**
 * Get a nested value from an object using dot notation
 * e.g., getNestedValue(obj, 'common.buttons.submit')
 */
export function getNestedValue(
  obj: NestedMessages,
  path: string
): string | string[] | undefined {
  const keys = path.split('.');
  let current: NestedMessages | string | string[] | undefined = obj;

  for (const key of keys) {
    if (current === undefined || typeof current === 'string' || Array.isArray(current)) {
      return undefined;
    }
    current = current[key];
  }

  return typeof current === 'string' || Array.isArray(current) ? current : undefined;
}

/**
 * Get translation with fallback to English
 * If the key doesn't exist in the target locale, returns the English translation
 */
export function getTranslationWithFallback(
  messages: NestedMessages,
  englishMessages: NestedMessages,
  key: string
): string | string[] {
  // Try to get the translation from the target locale
  const translation = getNestedValue(messages, key);
  
  if (translation !== undefined) {
    return translation;
  }

  // Fall back to English
  const englishTranslation = getNestedValue(englishMessages, key);
  
  if (englishTranslation !== undefined) {
    return englishTranslation;
  }

  // If not found in English either, return the key itself
  return key;
}

/**
 * Merge messages with English fallback
 * Creates a complete messages object where missing keys are filled from English
 */
export function mergeWithFallback(
  messages: NestedMessages,
  englishMessages: NestedMessages
): NestedMessages {
  const result: NestedMessages = {};

  // First, copy all English messages as base
  function deepCopy(source: NestedMessages, target: NestedMessages): void {
    for (const key of Object.keys(source)) {
      const value = source[key];
      if (typeof value === 'string') {
        target[key] = value;
      } else if (Array.isArray(value)) {
        // Handle arrays - copy them directly
        target[key] = [...value];
      } else {
        target[key] = {};
        deepCopy(value, target[key] as NestedMessages);
      }
    }
  }

  deepCopy(englishMessages, result);

  // Then, override with locale-specific messages
  function deepMerge(source: NestedMessages, target: NestedMessages): void {
    for (const key of Object.keys(source)) {
      const value = source[key];
      if (typeof value === 'string') {
        target[key] = value;
      } else if (Array.isArray(value)) {
        // Handle arrays - replace entirely with locale version
        target[key] = [...value];
      } else if (typeof target[key] === 'object' && target[key] !== null && !Array.isArray(target[key])) {
        deepMerge(value, target[key] as NestedMessages);
      } else {
        target[key] = {};
        deepMerge(value, target[key] as NestedMessages);
      }
    }
  }

  deepMerge(messages, result);

  return result;
}

/**
 * Create a translation function with automatic fallback
 */
export function createTranslator(
  messages: NestedMessages,
  englishMessages: NestedMessages
): (key: string, params?: Record<string, string | number>) => string | string[] {
  return (key: string, params?: Record<string, string | number>): string | string[] => {
    const translation = getTranslationWithFallback(messages, englishMessages, key);

    // If it's an array, return as-is (no parameter replacement for arrays)
    if (Array.isArray(translation)) {
      return translation;
    }

    // Replace parameters in the translation
    if (params && typeof translation === 'string') {
      let result = translation;
      for (const [paramKey, paramValue] of Object.entries(params)) {
        result = result.replace(
          new RegExp(`\\{${paramKey}\\}`, 'g'),
          String(paramValue)
        );
      }
      return result;
    }

    return translation;
  };
}

/**
 * Check if a translation key exists in a locale
 */
export function hasTranslation(
  messages: NestedMessages,
  key: string
): boolean {
  return getNestedValue(messages, key) !== undefined;
}

/**
 * Get all missing translation keys for a locale compared to English
 */
export function getMissingKeys(
  messages: NestedMessages,
  englishMessages: NestedMessages,
  prefix: string = ''
): string[] {
  const missingKeys: string[] = [];

  function checkKeys(
    english: NestedMessages,
    target: NestedMessages,
    currentPrefix: string
  ): void {
    for (const key of Object.keys(english)) {
      const fullKey = currentPrefix ? `${currentPrefix}.${key}` : key;
      const englishValue = english[key];
      const targetValue = target[key];

      if (typeof englishValue === 'string') {
        if (targetValue === undefined) {
          missingKeys.push(fullKey);
        }
      } else if (Array.isArray(englishValue)) {
        // Arrays don't need recursive checking
        if (targetValue === undefined) {
          missingKeys.push(fullKey);
        }
      } else {
        checkKeys(
          englishValue,
          (typeof targetValue === 'object' && !Array.isArray(targetValue) ? targetValue : {}) as NestedMessages,
          fullKey
        );
      }
    }
  }

  checkKeys(englishMessages, messages, prefix);
  return missingKeys;
}
