import { Component } from '@angular/core';
import { ThemeService } from '../../core/services/theme.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [FormsModule,ReactiveFormsModule],
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

  onSubmit() {
    if (
      this.contactData.name &&
      this.contactData.email &&
      this.contactData.message
    ) {
      alert(`Thank you, ${this.contactData.name}! Your message has been sent.`);
      this.contactData = { name: '', email: '', message: '' };
    } else {
      alert('Please fill all fields.');
    }
  }
}
