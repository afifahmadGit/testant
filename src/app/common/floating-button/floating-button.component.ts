import { Component } from '@angular/core';

@Component({
  selector: 'app-floating-button',
  templateUrl: './floating-button.component.html',
  styleUrl: './floating-button.component.css'
})
export class FloatingButtonComponent {
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scrolls smoothly to the top
  }
}
