import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesArtisansComponent } from './categories-artisans.component';

describe('CategoriesArtisansComponent', () => {
  let component: CategoriesArtisansComponent;
  let fixture: ComponentFixture<CategoriesArtisansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CategoriesArtisansComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoriesArtisansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
