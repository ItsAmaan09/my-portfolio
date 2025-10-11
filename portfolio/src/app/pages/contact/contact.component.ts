import { Component } from '@angular/core';
import { ThemeService } from '../../core/services/theme.service';
import { FormsModule, ReactiveFormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  theme = 'light';

  contactData = {
    name: '',
    email: '',
    message: '',
  };

  constructor(private themeService: ThemeService) {
    this.themeService.theme$.subscribe((t) => (this.theme = t));
  }

  async onSubmit(form: NgForm) {
    // if (form.invalid) {
    //   form.control.markAllAsTouched(); // show errors
    //   return;
    // }

    const payload = {
      access_key: 'b67d4ce7-58be-49b0-b2bd-d0168596efe5', // Replace with Web3Forms access key
      name: this.contactData.name,
      email: this.contactData.email,
      message: this.contactData.message,
    };

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        alert('✅ Message sent successfully!');
        this.contactData = { name: '', email: '', message: '' };
      } else {
        alert('❌ Failed to send message, try again later.');
      }
    } catch (error) {
      console.error(error);
      alert('❌ Error sending message!');
    }
  }
}
