import { Component } from '@angular/core';
import { HighlightService } from '../../service/common.service';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrl: './product-listing.component.css'
})
export class ProductListingComponent {

  isHighlighted: boolean = false;

  constructor(private highlightService: HighlightService) {}

  ngOnInit() {
    this.highlightService.highlightedComponent$.subscribe(component => {
      this.isHighlighted = component === 'sidebar';
    });
  }


  brands: string[] = [
    'NPAV', 
    'Quick Heal', 
    'ESAT', 
    'Bit Defender', 
    'Kaspersky', 
    'Norton', 
    'McAfee', 
    'AVG', 
    'Avira', 
    'Panda Security', 
    'Webroot'
  ];
  
  activeBrand: string = this.brands[0]; // Default active brand

  setActive(brand: string) {
    this.highlightService.setHighlightedComponent('sidebar');
    this.activeBrand = brand;
  }

}
