import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListesArtisansComponent } from './listes-artisans.component';

describe('ListesArtisansComponent', () => {
  let component: ListesArtisansComponent;
  let fixture: ComponentFixture<ListesArtisansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListesArtisansComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListesArtisansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
