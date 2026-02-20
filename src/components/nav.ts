import { icons } from '../icons';
import { toggleTheme, isDarkMode } from '../theme';

export function renderNav(): string {
  return `
    <header class="fixed top-0 left-0 right-0 z-50 bg-stone-50/80 dark:bg-surface-950/80 backdrop-blur-xl border-b border-stone-200/60 dark:border-surface-800/60 transition-colors duration-300">
      <nav class="section-container flex items-center justify-between h-16">
        <!-- Logo -->
        <a href="#" class="group flex items-baseline gap-0.5">
          <span class="font-serif italic text-2xl font-bold text-brand-700 dark:text-brand-400 group-hover:text-accent-500 dark:group-hover:text-accent-400 transition-colors duration-300 -mr-0.5">C</span>
          <span class="text-base font-semibold tracking-tight text-stone-900 dark:text-stone-200 transition-colors duration-300"></span>
          <!-- <span class="text-stone-300 dark:text-surface-700 mx-0.5 font-light">|</span> -->
          <span class="font-serif italic text-2xl font-bold text-accent-500 dark:text-accent-400 group-hover:text-brand-700 dark:group-hover:text-brand-400 transition-colors duration-300 -mr-0.5">O</span>
          <span class="text-base font-semibold tracking-tight text-stone-900 dark:text-stone-200 transition-colors duration-300"></span>
        </a>

        <!-- Desktop Nav -->
        <div class="hidden md:flex items-center gap-1">
          <a href="#home" class="px-3.5 py-2 rounded-lg nav-link hover:bg-stone-100 dark:hover:bg-surface-800 transition-all duration-200">Home</a>
          <a href="#projects" class="px-3.5 py-2 rounded-lg nav-link hover:bg-stone-100 dark:hover:bg-surface-800 transition-all duration-200">Projects</a>
          <a href="#playground" class="px-3.5 py-2 rounded-lg nav-link hover:bg-stone-100 dark:hover:bg-surface-800 transition-all duration-200">Playground</a>
          <a href="#contact" class="px-3.5 py-2 rounded-lg nav-link hover:bg-stone-100 dark:hover:bg-surface-800 transition-all duration-200">Contact</a>
          <div class="w-px h-5 mx-2 bg-stone-200 dark:bg-surface-700"></div>
          <button id="theme-toggle" class="p-2 rounded-lg hover:bg-stone-100 dark:hover:bg-surface-800 transition-all duration-200 text-stone-500 dark:text-stone-400 hover:text-brand-600 dark:hover:text-brand-400" aria-label="Toggle theme">
            <span id="theme-icon"></span>
          </button>
        </div>

        <!-- Mobile Controls -->
        <div class="flex items-center gap-1.5 md:hidden">
          <button id="theme-toggle-mobile" class="p-2 rounded-lg hover:bg-stone-100 dark:hover:bg-surface-800 transition-all duration-200 text-stone-500 dark:text-stone-400" aria-label="Toggle theme">
            <span id="theme-icon-mobile"></span>
          </button>
          <button id="menu-toggle" class="p-2 rounded-lg hover:bg-stone-100 dark:hover:bg-surface-800 transition-all duration-200 text-stone-500 dark:text-stone-400" aria-label="Open menu">
            ${icons.menu}
          </button>
        </div>
      </nav>

      <!-- Mobile Menu Overlay -->
      <div id="mobile-menu" class="hidden fixed inset-0 z-50 bg-stone-50 dark:bg-surface-950 md:hidden transition-colors duration-300">
        <div class="flex items-center justify-between px-4 h-16 border-b border-stone-200 dark:border-surface-800">
          <a href="#" class="group flex items-baseline gap-0.5">
            <span class="font-serif italic text-2xl font-bold text-brand-700 dark:text-brand-400">C</span>
            <span class="text-stone-300 dark:text-surface-700 mx-0.5 font-light">|</span>
            <span class="font-serif italic text-2xl font-bold text-accent-500 dark:text-accent-400">O</span>
          </a>
          <button id="menu-close" class="p-2 rounded-lg hover:bg-stone-100 dark:hover:bg-surface-800 transition-all duration-200 text-stone-500 dark:text-stone-400" aria-label="Close menu">
            ${icons.close}
          </button>
        </div>
        <div class="flex flex-col items-center justify-center gap-6 h-[calc(100vh-4rem)]">
          <a href="#home" class="text-xl font-semibold text-stone-700 dark:text-stone-300 hover:text-brand-600 dark:hover:text-brand-400 transition-colors px-6 py-2 rounded-xl hover:bg-stone-100 dark:hover:bg-surface-800">Home</a>
          <a href="#projects" class="text-xl font-semibold text-stone-700 dark:text-stone-300 hover:text-brand-600 dark:hover:text-brand-400 transition-colors px-6 py-2 rounded-xl hover:bg-stone-100 dark:hover:bg-surface-800">Projects</a>
          <a href="#playground" class="text-xl font-semibold text-stone-700 dark:text-stone-300 hover:text-brand-600 dark:hover:text-brand-400 transition-colors px-6 py-2 rounded-xl hover:bg-stone-100 dark:hover:bg-surface-800">Playground</a>
          <a href="#contact" class="text-xl font-semibold text-stone-700 dark:text-stone-300 hover:text-brand-600 dark:hover:text-brand-400 transition-colors px-6 py-2 rounded-xl hover:bg-stone-100 dark:hover:bg-surface-800">Contact</a>
        </div>
      </div>
    </header>
  `;
}

/** Call after DOM is rendered to bind all nav interactions */
export function initNavInteractions(): void {
  // Theme toggles
  const themeBtn = document.getElementById('theme-toggle');
  const themeBtnMobile = document.getElementById('theme-toggle-mobile');

  function handleThemeToggle() {
    toggleTheme();
    updateThemeIcon();
  }

  themeBtn?.addEventListener('click', handleThemeToggle);
  themeBtnMobile?.addEventListener('click', handleThemeToggle);

  // Set initial icon
  updateThemeIcon();

  // Mobile menu
  const menuBtn = document.getElementById('menu-toggle');
  const closeBtn = document.getElementById('menu-close');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileLinks = mobileMenu?.querySelectorAll('a');

  function closeMenu() {
    mobileMenu?.classList.add('hidden');
    document.body.style.overflow = '';
  }

  function openMenu() {
    mobileMenu?.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  menuBtn?.addEventListener('click', openMenu);
  closeBtn?.addEventListener('click', closeMenu);
  mobileLinks?.forEach(link => link.addEventListener('click', closeMenu));
}

function updateThemeIcon(): void {
  const dark = isDarkMode();
  const icon = dark ? icons.sun : icons.moon;
  const desktopIcon = document.getElementById('theme-icon');
  const mobileIcon = document.getElementById('theme-icon-mobile');
  if (desktopIcon) desktopIcon.innerHTML = icon;
  if (mobileIcon) mobileIcon.innerHTML = icon;
}
