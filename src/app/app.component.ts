import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './Common/header/header.component';
import { MatModule } from './Material/mat.module';
import { SidebarComponent } from './Common/sidebar/sidebar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatModule, HeaderComponent,  CommonModule],
  // SidebarComponent,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Fish Shop ';
  isSidebarCollapsed = false;

  onToggleSidebar() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }
}
