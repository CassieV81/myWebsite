import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmailService } from '../Services/email.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactForm!: FormGroup;
  isModalVisible: boolean = false;
  emailStatus: string = '';

  constructor(private emailService: EmailService) {}

  ngOnInit() {
    this.contactForm = new FormGroup({
      firstname: new FormControl(null, Validators.required),
      lastname: new FormControl(),
      email: new FormControl(null, [Validators.required, Validators.email]),
      message: new FormControl(null, Validators.required)
    });

    this.emailService.emailStatus$.subscribe(status => {
      if (status){
        this.emailStatus = status;
        this.openModal(); 
      }
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.emailService.sendEmail(this.contactForm.value).subscribe({
        next: () => {
          console.log('Email sent successfully!');
          this.contactForm.reset();
        },
        error: err => {
          console.error('Error sending email:', err);
          this.emailStatus = 'Failed to send email. Please try again later.';
        }
      });
    } 
  }

  openModal() {
    this.isModalVisible = true;
  }

  closeModal() {
    this.isModalVisible = false;
    this.emailService.closeModal();
  }
}

// }
