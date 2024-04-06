import { Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { EmailService } from '../Services/email.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Input() showModal: boolean = false;
  emailStatus: string = '';

  constructor(private emailService: EmailService) {}

  ngOnInit() {
    this.emailService.emailStatus$.subscribe(status => {
      this.emailStatus = status;
      this.showModal = true;
    });
  }

  closeModal() {
    this.showModal = false;
    this.emailService.closeModal();
  }
}
