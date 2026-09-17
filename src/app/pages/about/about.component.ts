import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './about.component.html'
})
export class AboutComponent {
  submissionMessage = '';

  contactForm = {
    name: '',
    email: '',
    message: ''
  };

  onSubmit(): void {
    const subject = `Portfolio Contact Form - Message from ${this.contactForm.name}`;
    const body = `Name: ${this.contactForm.name}\nEmail: ${this.contactForm.email}\n\nMessage:\n${this.contactForm.message}`;
    const mailtoLink = `mailto:nornazmi00@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    this.submissionMessage = 'Your email application should now be open.';
    window.location.href = mailtoLink;
  }
}
