import { Component, AfterViewInit } from '@angular/core';
declare var $: any; // Use jQuery in the component

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements AfterViewInit {

  ngAfterViewInit() {
    $('.category-carousel').owlCarousel({
      items: 5,
      loop: false,
      margin: 30,
      nav: true,
      navText: ['❮', '❯'],
      responsive: {
        0: {
          items: 2
        },
        768: {
          items: 3
        },
        992: {
          items: 6
        }
      }
    });
  }
}
