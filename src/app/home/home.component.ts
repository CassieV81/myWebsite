import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  @Input() githubLink: string = '';
  @Input() linkedinLink: string = '';

  isHidden: boolean = true;

  showAbout() {
    this.isHidden = !this.isHidden;
  }
  
}
