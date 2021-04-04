import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsSustainabilityComponent } from './cards-sustainability.component';

describe('CardsSustainabilityComponent', () => {
  let component: CardsSustainabilityComponent;
  let fixture: ComponentFixture<CardsSustainabilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsSustainabilityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsSustainabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
