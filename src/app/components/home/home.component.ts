import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatModule } from '../../Material/mat.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [MatModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  sliderImages: any[] = [];
  currentSlideIndex: number = 0;
  private slideInterval: any;

  constructor() { }

  ngOnInit(): void {
    this.loadImages();
    
  }


  loadImages(): void {
    this.sliderImages = [
      { id: 1, src: 'assets/images/1.png', alt: 'Slide 1' },
      { id: 2, src: 'assets/images/2.png', alt: 'Slide 2' },
      { id: 3, src: 'assets/images/3.png', alt: 'Slide 3' }
    ];
  }

  
}
