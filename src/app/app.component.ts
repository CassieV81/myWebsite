import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  isLight: boolean = true
  
  activeRoute: ActivatedRoute = inject(ActivatedRoute);

  ngOnInit() {
    this.activeRoute.fragment.subscribe((value) => {
      this.jumpToSection(value);
    })

  }
  
  jumpToSection(section: any) {
    document.getElementById(section)?.scrollIntoView({behavior: 'smooth'})
  }

  applyTheme() {
    const theme = this.isLight ? 'light' : 'dark';
    document.body.setAttribute('data-theme', theme);
  }

  toggleTheme() {
    this.isLight = !this.isLight;
    localStorage.setItem('themePreference', this.isLight ? 'light' : 'dark');
    this.applyTheme();
  }
}
