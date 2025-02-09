import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeclarationAccessibiliteComponent } from './declaration-accessibilite.component';

describe('DeclarationAccessibiliteComponent', () => {
  let component: DeclarationAccessibiliteComponent;
  let fixture: ComponentFixture<DeclarationAccessibiliteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeclarationAccessibiliteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeclarationAccessibiliteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
