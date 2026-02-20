import { icons } from '../icons';

interface PlaygroundItem {
  title: string;
  description: string;
  tag: string;
  status: 'coming-soon' | 'live';
  url?: string;
}

const items: PlaygroundItem[] = [
  // Add items here as you build them, e.g.:
  // {
  //   title: 'Prompt Parameter Explorer',
  //   description: 'Interactive tool to visualize how temperature, top-p, and other parameters affect LLM outputs.',
  //   tag: 'LLM',
  //   status: 'coming-soon',
  // },
];

export function renderPlayground(): string {
  return `
    <section id="playground" class="py-24">
      <div class="section-container">
        <!-- Section Header -->
        <div class="mb-12" data-animate>
          <div class="flex items-center gap-3 mb-3">
            <h2 class="section-title text-stone-900 dark:text-white">Playground</h2>
            <span class="px-2.5 py-0.5 text-xs font-medium rounded-full bg-brand-100 dark:bg-brand-950 text-brand-700 dark:text-brand-400 border border-brand-200 dark:border-brand-800">WIP</span>
          </div>
          <p class="section-subtitle">
            A space for experiments, thoughts, and interactive demos.
          </p>
        </div>

        ${items.length > 0 ? renderItems(items) : renderEmptyState()}
      </div>
    </section>
  `;
}

function renderItems(playgroundItems: PlaygroundItem[]): string {
  return `
    <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      ${playgroundItems.map((item, i) => renderCard(item, i)).join('')}
    </div>
  `;
}

function renderCard(item: PlaygroundItem, index: number): string {
  const isLive = item.status === 'live';
  const delay = index * 0.1;

  return `
    <div class="card p-5 group ${isLive ? 'cursor-pointer' : ''}" data-animate style="animation-delay: ${delay}s"
         ${isLive && item.url ? `onclick="window.location.hash='${item.url}'"` : ''}>
      <div class="flex items-start justify-between mb-3">
        <span class="px-2 py-0.5 text-xs font-medium rounded-md bg-stone-100 dark:bg-surface-800 text-stone-600 dark:text-stone-400">${item.tag}</span>
        ${isLive
          ? `<span class="flex items-center gap-1 text-xs font-medium text-brand-600 dark:text-brand-400"><span class="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse"></span> Live</span>`
          : `<span class="text-xs font-medium text-stone-400 dark:text-stone-600">Coming soon</span>`
        }
      </div>
      <h3 class="text-base font-semibold text-stone-900 dark:text-white mb-2 ${isLive ? 'group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors' : ''}">${item.title}</h3>
      <p class="text-sm text-stone-500 dark:text-stone-400 leading-relaxed">${item.description}</p>
    </div>
  `;
}

function renderEmptyState(): string {
  return `
    <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3" data-animate>
      <!-- Placeholder cards -->
      <div class="card p-6 border-dashed">
        <div class="text-brand-600 dark:text-brand-400 mb-3">${icons.brain}</div>
        <h3 class="text-base font-semibold text-stone-900 dark:text-white mb-2">LLM Experiments</h3>
        <p class="text-sm text-stone-500 dark:text-stone-400 leading-relaxed">
          Interactive demos exploring prompt engineering, retrieval-augmented generation, and model behavior.
        </p>
      </div>
      <div class="card p-6 border-dashed">
        <div class="text-accent-500 dark:text-accent-400 mb-3">${icons.flask}</div>
        <h3 class="text-base font-semibold text-stone-900 dark:text-white mb-2">AI Research Notes</h3>
        <p class="text-sm text-stone-500 dark:text-stone-400 leading-relaxed">
          Thoughts and writeups from courses, papers, and hands-on work during my Master's program.
        </p>
      </div>
      <div class="card p-6 border-dashed">
        <div class="text-stone-500 dark:text-stone-400 mb-3">${icons.sparkles}</div>
        <h3 class="text-base font-semibold text-stone-900 dark:text-white mb-2">Side Projects</h3>
        <p class="text-sm text-stone-500 dark:text-stone-400 leading-relaxed">
          Small tools, visualizations, and creativity with code, things I build for fun and curiosity.
        </p>
      </div>
    </div>
  `;
}
