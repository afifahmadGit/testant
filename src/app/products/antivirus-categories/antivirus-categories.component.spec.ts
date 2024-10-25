import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AntivirusCategoriesComponent } from './antivirus-categories.component';

describe('AntivirusCategoriesComponent', () => {
  let component: AntivirusCategoriesComponent;
  let fixture: ComponentFixture<AntivirusCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AntivirusCategoriesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AntivirusCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
