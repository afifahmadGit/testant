// highlight.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HighlightService {
  private highlightedComponent = new BehaviorSubject<string>('none'); // 'none', 'header', 'sidebar'
  highlightedComponent$ = this.highlightedComponent.asObservable();

  setHighlightedComponent(component: string) {
    this.highlightedComponent.next(component);
  }
}
