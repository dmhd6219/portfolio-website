import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function ny(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function numberStars(num: number): string {
    if (num > 10 && [11, 12, 13, 14].includes(num % 100)) return 'звёзд';
    const last_num = num % 10;
    if (num == 1) return 'звезда';
    if ([2, 3, 4].includes(last_num)) return 'звезды';
    if ([5, 6, 7, 8, 9, 0].includes(last_num)) return 'звёзд';

    return '';
}
