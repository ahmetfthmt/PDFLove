/**
 * Font Configuration
 * Requirements: 8.4 - Font optimization
 *
 * Build environments without outbound TLS access can fail while fetching
 * Google Fonts during `next build`. Use local/system fallbacks so builds
 * remain deterministic in Docker and CI.
 */

const interFontFamily = ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'].join(', ');

const jetbrainsMonoFontFamily = ['JetBrains Mono', 'Fira Code', 'Consolas', 'Monaco', 'monospace'].join(', ');

/**
 * Inter font - Primary sans-serif font
 * Used for body text and UI elements
 */
export const inter = {
  variable: '',
  className: '',
  style: {
    fontFamily: interFontFamily,
  },
} as const;

/**
 * JetBrains Mono font - Monospace font
 * Used for code snippets and technical content
 */
export const jetbrainsMono = {
  variable: '',
  className: '',
  style: {
    fontFamily: jetbrainsMonoFontFamily,
  },
} as const;

/**
 * Combined font variables for use in className
 */
export const fontVariables = `${inter.variable} ${jetbrainsMono.variable}`;

/**
 * Font class names for direct usage
 */
export const fontClassNames = {
  sans: inter.className,
  mono: jetbrainsMono.className,
};

/**
 * CSS custom properties for fonts
 * These are set as CSS variables and can be used in Tailwind
 */
export const fontCssVariables = {
  '--font-sans': inter.style.fontFamily,
  '--font-mono': jetbrainsMono.style.fontFamily,
} as const;
