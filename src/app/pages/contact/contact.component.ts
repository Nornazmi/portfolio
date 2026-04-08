import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  template: `
    <section class="max-w-xl mx-auto px-6 py-20 animate-fade-up">
      <h1 class="font-display text-4xl font-bold text-zinc-900 dark:text-white mb-4">
        Get in touch
      </h1>
      <p class="text-zinc-500 dark:text-zinc-400 mb-8 leading-relaxed">
        Open to full-time roles, freelance projects, and interesting conversations.
      </p>
      <a href="mailto:you&#64;example.com"
         class="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent text-black dark:text-white
                font-medium text-sm hover:bg-indigo-500 active:scale-95 transition-all
                shadow-lg shadow-indigo-200 dark:shadow-indigo-900/30 no-underline">
        you&#64;example.com &#8599;
      </a>
    </section>
  `
})
export class ContactComponent {}
