import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardServiceOneComponent } from './card-service-one.component';

describe('CardServiceOneComponent', () => {
  let component: CardServiceOneComponent;
  let fixture: ComponentFixture<CardServiceOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardServiceOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardServiceOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
