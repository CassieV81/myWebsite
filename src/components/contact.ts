import { icons } from '../icons';

const FORM_URL = 'https://formspree.io/f/mjvnpvnr';

export function renderContact(): string {
  setTimeout(initContactForm, 0);

  return `
    <section id="contact" class="py-24">
      <div class="section-container">
        <div class="max-w-2xl mx-auto">
          <!-- Section Header -->
          <div class="text-center mb-12" data-animate>
            <h2 class="section-title text-stone-900 dark:text-white">Get in Touch</h2>
            <p class="section-subtitle mx-auto">
              Have a question, want to collaborate, or just want to say hello? I'd love to hear from you.
            </p>
          </div>

          <!-- Contact Form -->
          <form id="contact-form" class="card p-6 sm:p-8 space-y-6" data-animate>
            <div class="grid sm:grid-cols-2 gap-6">
              <div>
                <label for="firstname" class="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-1.5">
                  First Name <span class="text-red-500">*</span>
                </label>
                <input
                  type="text" id="firstname" name="firstname" required
                  placeholder="Jane"
                  class="w-full px-4 py-2.5 rounded-xl border border-stone-300 dark:border-surface-700 bg-white dark:bg-surface-800 text-stone-900 dark:text-white placeholder-stone-400 dark:placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all text-sm"
                />
              </div>
              <div>
                <label for="lastname" class="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-1.5">
                  Last Name
                </label>
                <input
                  type="text" id="lastname" name="lastname"
                  placeholder="Doe"
                  class="w-full px-4 py-2.5 rounded-xl border border-stone-300 dark:border-surface-700 bg-white dark:bg-surface-800 text-stone-900 dark:text-white placeholder-stone-400 dark:placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all text-sm"
                />
              </div>
            </div>

            <div>
              <label for="email" class="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-1.5">
                Email <span class="text-red-500">*</span>
              </label>
              <input
                type="email" id="email" name="email" required
                placeholder="jane@example.com"
                class="w-full px-4 py-2.5 rounded-xl border border-stone-300 dark:border-surface-700 bg-white dark:bg-surface-800 text-stone-900 dark:text-white placeholder-stone-400 dark:placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all text-sm"
              />
            </div>

            <div>
              <label for="message" class="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-1.5">
                Message <span class="text-red-500">*</span>
              </label>
              <textarea
                id="message" name="message" rows="5" required
                placeholder="What's on your mind?"
                class="w-full px-4 py-2.5 rounded-xl border border-stone-300 dark:border-surface-700 bg-white dark:bg-surface-800 text-stone-900 dark:text-white placeholder-stone-400 dark:placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all text-sm resize-y"
              ></textarea>
            </div>

            <!-- Status Message -->
            <div id="form-status" class="hidden text-sm font-medium text-center p-3 rounded-xl"></div>

            <button
              type="submit"
              class="btn-primary w-full justify-center"
            >
              ${icons.mail} Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  `;
}

function initContactForm(): void {
  const form = document.getElementById('contact-form') as HTMLFormElement | null;
  const status = document.getElementById('form-status');
  if (!form || !status) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const submitBtn = form.querySelector('button[type="submit"]') as HTMLButtonElement;
    const originalText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = 'Sending...';

    const formData = new FormData(form);

    try {
      const response = await fetch(FORM_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: `${formData.get('firstname')} ${formData.get('lastname') || ''}`.trim(),
          email: formData.get('email'),
          message: formData.get('message'),
        }),
      });

      if (response.ok) {
        status.textContent = 'Message sent successfully! I\'ll get back to you soon.';
        status.className = 'text-sm font-medium text-center p-3 rounded-xl bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400';
        form.reset();
      } else {
        throw new Error('Failed');
      }
    } catch {
      status.textContent = 'Failed to send message. Please try again or reach out on LinkedIn.';
      status.className = 'text-sm font-medium text-center p-3 rounded-xl bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400';
    } finally {
      status.classList.remove('hidden');
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;

      setTimeout(() => {
        status.classList.add('hidden');
      }, 5000);
    }
  });
}
