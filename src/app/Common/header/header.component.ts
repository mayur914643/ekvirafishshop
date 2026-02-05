import { Component, EventEmitter, OnInit, Output, PLATFORM_ID, Inject, ElementRef, Renderer2 } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { MatModule } from '../../Material/mat.module';

@Component({
  selector: 'app-header',
  imports: [MatModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

  @Output() toggleSidebar = new EventEmitter<void>();
  isDarkMode: boolean = false;
  logoPath = 'assets/images/bLogo.png';

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private renderer: Renderer2,
    private elementRef: ElementRef
  ) { }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const savedTheme = localStorage.getItem('theme');
      this.isDarkMode = savedTheme == 'dark';
      this.applyTheme();
    }

  }
  onToggle() { this.toggleSidebar.emit(); }

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    this.applyTheme();
  }

  applyTheme() {
    if (isPlatformBrowser(this.platformId)) {
      const root = document.documentElement;
      if (this.isDarkMode) {
        this.renderer.addClass(root, 'dark-theme');
        localStorage.setItem('theme', 'dark');
      } else {
        this.renderer.removeClass(root, 'dark-theme');
        localStorage.setItem('theme', 'light');
      }
    }
  }
}
