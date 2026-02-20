import { renderNav, initNavInteractions } from './components/nav';
import { renderHero } from './components/hero';
import { renderProjects } from './components/projects';
import { renderPlayground } from './components/playground';
import { renderContact } from './components/contact';
import { renderFooter } from './components/footer';

export function renderApp(): void {
  const app = document.getElementById('app');
  if (!app) return;

  app.innerHTML = `
    ${renderNav()}
    <main>
      ${renderHero()}
      ${renderProjects()}
      ${renderPlayground()}
      ${renderContact()}
    </main>
    ${renderFooter()}
  `;

  // Initialize all interactive behaviors after DOM renders
  initNavInteractions();
  initScrollAnimations();
}

function initScrollAnimations(): void {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('slide-up');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
  );

  document.querySelectorAll('[data-animate]').forEach((el) => {
    el.classList.add('opacity-0');
    observer.observe(el);
  });
}
