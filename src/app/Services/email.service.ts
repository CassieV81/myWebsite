import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, map, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private httpClient: HttpClient) { }

  emailStatus!: string;
  isModalVisible: boolean = false;
  
  private emailStatusSubject = new BehaviorSubject<string>('');
  emailStatus$: Observable<string> = this.emailStatusSubject.asObservable();

  sendEmail(formData: any): Observable<any> {
    console.log(formData)
    const url = environment.formUrl;
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    console.log(formData.email.valid)
    const body = new URLSearchParams();
    body.set('name', `${formData.firstname} ${formData.lastname ? formData.lastname : ' '}`);
    body.set('email', formData.email);
    body.set('message', formData.message);

    return this.httpClient.post(url, body.toString(), { headers }).pipe(
      map(response => {
        console.log('Email sent successfully:', response);
        this.emailStatusSubject.next('Email sent successfully');
        return response;
      }),
      catchError(error => {
        console.error('Error sending email:', error);
        this.emailStatusSubject.next('Failed to send email. Please try again later.');
        return throwError('Failed to send email. Please try again later.');
      })
    );
  }
  showStatus() {
    return this.isModalVisible = true;
  }
  closeModal() {
    return this.isModalVisible = false;
  }
}
