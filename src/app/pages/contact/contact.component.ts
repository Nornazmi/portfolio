import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section class="max-w-4xl mx-auto px-6 py-20 animate-fade-up">
      <h1 class="font-display text-4xl font-bold text-zinc-900 dark:text-white mb-4">
        Contact Me
      </h1>
      <p class="text-zinc-500 dark:text-zinc-400 mb-12 leading-relaxed">
        Let's connect and discuss your next project
      </p>
      
      <div class="grid md:grid-cols-2 gap-12 mb-12">
        <!-- Contact Info -->
        <div>
          <h2 class="font-display text-2xl font-bold text-zinc-900 dark:text-white mb-6">
            Get in Touch
          </h2>
          <div class="space-y-4">
            <div class="p-4 rounded-lg border border-blue-200 dark:border-blue-800 
                        bg-blue-50 dark:bg-blue-950/30 hover:bg-blue-100 dark:hover:bg-blue-950/50 
                        transition-colors duration-200">
              <h3 class="font-medium text-zinc-900 dark:text-white mb-1">Email</h3>
              <p class="text-zinc-700 dark:text-zinc-300">nornazmi00&#64;gmail.com</p>
            </div>
            <div class="p-4 rounded-lg border border-green-200 dark:border-green-800 
                        bg-green-50 dark:bg-green-950/30 hover:bg-green-100 dark:hover:bg-green-950/50 
                        transition-colors duration-200">
              <h3 class="font-medium text-zinc-900 dark:text-white mb-1">LinkedIn</h3>
              <p class="text-zinc-700 dark:text-zinc-300">linkedin.com/in/mohamad-nornazmi</p>
            </div>
            <div class="p-4 rounded-lg border border-purple-200 dark:border-purple-800 
                        bg-purple-50 dark:bg-purple-950/30 hover:bg-purple-100 dark:hover:bg-purple-950/50 
                        transition-colors duration-200">
              <h3 class="font-medium text-zinc-900 dark:text-white mb-1">GitHub</h3>
              <p class="text-zinc-700 dark:text-zinc-300">github.com/Nornazmi</p>
            </div>
          </div>
        </div>
        
        <!-- Contact Form -->
        <div>
          <form class="contact-form" (ngSubmit)="onSubmit()">
            <div class="space-y-6">
              <div>
                <label for="name" class="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                  Name
                </label>
                <input type="text" id="name" name="name" [(ngModel)]="contactForm.name" required
                       class="w-full px-4 py-3 rounded-lg border border-zinc-200 dark:border-zinc-700
                              bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white
                              placeholder-zinc-500 dark:placeholder-zinc-400
                              focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent">
              </div>
              
              <div>
                <label for="email" class="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                  Email
                </label>
                <input type="email" id="email" name="email" [(ngModel)]="contactForm.email" required
                       class="w-full px-4 py-3 rounded-lg border border-zinc-200 dark:border-zinc-700
                              bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white
                              placeholder-zinc-500 dark:placeholder-zinc-400
                              focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent">
              </div>
              
              <div>
                <label for="message" class="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                  Message
                </label>
                <textarea id="message" name="message" [(ngModel)]="contactForm.message" rows="5" required
                          class="w-full px-4 py-3 rounded-lg border border-zinc-200 dark:border-zinc-700
                                 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white
                                 placeholder-zinc-500 dark:placeholder-zinc-400
                                 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"></textarea>
              </div>
              
              <button type="submit" 
                      class="px-6 py-3 rounded-xl bg-blue-600 text-white dark:bg-black dark:text-white font-medium text-sm
                             hover:bg-blue-700 dark:hover:bg-gray-900 active:scale-95 transition-all shadow-lg
                             shadow-blue-200 dark:shadow-black/30">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  `
})
export class ContactComponent {
  contactForm = {
    name: '',
    email: '',
    message: ''
  };

  onSubmit() {
    console.log('Form submitted:', this.contactForm);
    // Handle form submission here
  }
}
