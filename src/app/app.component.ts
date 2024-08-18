import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, Input, OnInit, Output, Renderer2, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  @Output() linkedinLink: string = 'https://www.linkedin.com/in/cassandra-chidinma-obiagwu-1aa7a81a9/';
  @Output() githubLink: string = 'https://github.com/CassieV81';

  // preferredTheme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  // currentTheme = this.preferredTheme;
  // isDark: boolean = this.currentTheme === 'dark';
  isDark: boolean = true;
  isToggled: boolean = false;
  recentYear: number = new Date().getFullYear();

  constructor( private element: ElementRef, private renderer: Renderer2) {}
  
  activeRoute: ActivatedRoute = inject(ActivatedRoute);
  document: Document = inject(DOCUMENT)

  ngOnInit() {
    this.activeRoute.fragment.subscribe((value) => {
      this.jumpToSection(value);
    })

  }
  
  jumpToSection(section: any) {
    document.getElementById(section)?.scrollIntoView({behavior: 'smooth', block: 'nearest'})
  }

  toggleTheme() {
    this.renderer.setAttribute(this.document.body, 'data-theme', this.isDark ? 'light' : 'dark');
    this.isDark = !this.isDark;
  }

  toggleNav() {
    this.isToggled = !this.isToggled;
    const menu = this.element.nativeElement.querySelector('.links');
    console.log(menu)
    menu.style.display = this.isToggled ? 'grid' : 'none';
    this.renderer.removeClass(menu, 'fixNav');
  }

}
