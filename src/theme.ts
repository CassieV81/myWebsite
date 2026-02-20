/** Theme management — dark/light mode toggle with system preference + localStorage persistence */

const STORAGE_KEY = 'theme';

export function initTheme(): void {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}

export function toggleTheme(): void {
  const isDark = document.documentElement.classList.toggle('dark');
  localStorage.setItem(STORAGE_KEY, isDark ? 'dark' : 'light');
}

export function isDarkMode(): boolean {
  return document.documentElement.classList.contains('dark');
}
