import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsAreComponent } from './cards-are.component';

describe('CardsAreComponent', () => {
  let component: CardsAreComponent;
  let fixture: ComponentFixture<CardsAreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsAreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsAreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
