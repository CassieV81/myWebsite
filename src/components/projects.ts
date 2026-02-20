import { projects, type Project } from '../data/projects';
import { icons } from '../icons';

export function renderProjects(): string {
  return `
    <section id="projects" class="py-24">
      <div class="section-container">
        <!-- Section Header -->
        <div class="mb-12" data-animate>
          <h2 class="section-title text-stone-900 dark:text-white">Projects</h2>
          <p class="section-subtitle">
            A collection of projects from earlier explorations in web development.
          </p>
        </div>

        <!-- Project Grid -->
        <div class="grid gap-6 sm:grid-cols-2">
          ${projects.map((p, i) => renderProjectCard(p, i)).join('')}
        </div>
      </div>
    </section>
  `;
}

function renderProjectCard(project: Project, index: number): string {
  const delay = index * 0.1;

  return `
    <article class="card overflow-hidden group" data-animate style="animation-delay: ${delay}s">
      <!-- Image -->
      <div class="aspect-video overflow-hidden bg-stone-100 dark:bg-surface-800">
        <img
          src="${project.image}"
          alt="${project.imageAlt}"
          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>

      <!-- Content -->
      <div class="p-5">
        <h3 class="text-lg font-semibold text-stone-900 dark:text-white mb-2 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
          ${project.title}
        </h3>

        <p class="text-sm text-stone-500 dark:text-stone-400 leading-relaxed mb-4 line-clamp-3">
          ${project.description}
        </p>

        <!-- Tech Stack Tags -->
        <div class="flex flex-wrap gap-1.5 mb-4">
          ${project.techStack
            .map(
              (tech) =>
                `<span class="px-2 py-0.5 text-xs font-medium rounded-md bg-stone-100 dark:bg-surface-800 text-stone-600 dark:text-stone-400">${tech}</span>`
            )
            .join('')}
        </div>

        <!-- Links -->
        <div class="flex items-center gap-3">
          ${
            project.viewUrl
              ? `<a href="${project.viewUrl}" target="_blank" rel="noopener noreferrer"
                    class="inline-flex items-center gap-1.5 text-sm font-medium text-brand-600 dark:text-brand-400 hover:text-brand-700 dark:hover:text-brand-300 transition-colors">
                    ${icons.externalLink} Live Demo
                  </a>`
              : ''
          }
          ${
            project.codeUrl
              ? `<a href="${project.codeUrl}" target="_blank" rel="noopener noreferrer"
                    class="inline-flex items-center gap-1.5 text-sm font-medium text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white transition-colors">
                    ${icons.code} Source
                  </a>`
              : ''
          }
          ${
            !project.viewUrl && !project.codeUrl
              ? `<span class="inline-flex items-center gap-1.5 text-sm text-stone-400 dark:text-stone-600 italic">Closed source</span>`
              : ''
          }
        </div>
      </div>
    </article>
  `;
}
