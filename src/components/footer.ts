const GITHUB = 'https://github.com/CassieV81';
const LINKEDIN = 'https://www.linkedin.com/in/cassandra-obiagwu-1aa7a81a9/';

export function renderFooter(): string {
  const year = new Date().getFullYear();

  return `
    <footer class="border-t border-stone-200 dark:border-surface-800">
      <div class="section-container py-8">
        <div class="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p class="text-sm text-stone-500 dark:text-stone-400">
            &copy; ${year} Cassandra Obiagwu. 
          </p>
          <div class="flex items-center gap-6">
            <a href="${GITHUB}" target="_blank" rel="noopener noreferrer" class="text-sm text-stone-500 dark:text-stone-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
              GitHub
            </a>
            <a href="${LINKEDIN}" target="_blank" rel="noopener noreferrer" class="text-sm text-stone-500 dark:text-stone-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  `;
}
