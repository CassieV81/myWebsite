import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  activeRoute: ActivatedRoute = inject(ActivatedRoute);

  ngOnInit() {
    this.activeRoute.fragment.subscribe((value) => {
      this.jumpToSection(value);
    })

  }
  
  jumpToSection(section: any) {
    document.getElementById(section)?.scrollIntoView({behavior: 'smooth'})
  }
}
