'use client';

import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';
import { ChangeEvent, useTransition } from 'react';

export default function LanguageSelector() {
    const t = useTranslations('common');
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();
    const [isPending, startTransition] = useTransition();

    const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const nextLocale = e.target.value;
        startTransition(() => {
            router.replace(pathname, { locale: nextLocale });
        });
    };

    return (
        <div className="relative inline-block text-left">
            <select
                defaultValue={locale}
                className="block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={onSelectChange}
                disabled={isPending}
            >
                <option value="en">English</option>
                <option value="tr">Türkçe</option>
            </select>
        </div>
    );
}
