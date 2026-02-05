import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MatModule } from '../../Material/mat.module';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule, MatModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent  implements OnInit {
  
  @Input() isCollapsed: boolean = false;
  
  constructor() { }
  ngOnInit(): void {
    
  }
}
