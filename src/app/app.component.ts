import { DOCUMENT } from '@angular/common';
import { Component, Input, OnInit, Renderer2, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  linkedinLink: string = 'https://www.linkedin.com/in/cassandra-chidinma-obiagwu-1aa7a81a9/';
  githubLink: string = 'https://github.com/CassieV81';

  preferredTheme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  currentTheme = this.preferredTheme;
  isLight: boolean = this.currentTheme === 'light';

  constructor(private renderer: Renderer2) {}
  
  activeRoute: ActivatedRoute = inject(ActivatedRoute);
  document: Document = inject(DOCUMENT)

  ngOnInit() {
    this.activeRoute.fragment.subscribe((value) => {
      this.jumpToSection(value);
    })

  }
  
  jumpToSection(section: any) {
    document.getElementById(section)?.scrollIntoView({behavior: 'smooth'})
  }

  toggleTheme() {
    this.renderer.setAttribute(this.document.body, 'data-theme', this.isLight ? 'dark' : 'light');
    this.isLight = !this.isLight;
  }
}
