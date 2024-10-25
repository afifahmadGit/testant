import { Component } from '@angular/core';
import { HighlightService } from '../../service/common.service';

@Component({
  selector: 'app-antivirus-categories',
  templateUrl: './antivirus-categories.component.html',
  styleUrl: './antivirus-categories.component.css'
})
export class AntivirusCategoriesComponent {


  isHighlighted: boolean = false;

  constructor(private highlightService: HighlightService) {}

  ngOnInit() {
    this.highlightService.highlightedComponent$.subscribe(component => {
      this.isHighlighted = component === 'header';
    });
  }

  categories: string[] = ['Total Security', 'Antivirus', 'Internet Security', 'Renewal', 'Mobile Security'];

  // Keep track of the active category
  activeCategory: string = this.categories[0]; // Set the default active category
  

  // Method to set the active category
  setActive(category: string) {
    this.highlightService.setHighlightedComponent('header');
    this.activeCategory = category;
  }

}
