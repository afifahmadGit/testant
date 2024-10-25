import { Component, AfterViewInit, ElementRef } from '@angular/core';

declare var $: any;
@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrl: './featured.component.css'
})
export class FeaturedComponent {
  constructor(private el: ElementRef) {}
  ngAfterViewInit() {
    $('.owl-carousel').owlCarousel({
      items:3,
      loop: false,
      margin: 10,
      nav: true,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 3
        },
        1000: {
          items: 5
        }
      }
    });
  }
}
