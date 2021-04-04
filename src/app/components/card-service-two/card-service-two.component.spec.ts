import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardServiceTwoComponent } from './card-service-two.component';

describe('CardServiceTwoComponent', () => {
  let component: CardServiceTwoComponent;
  let fixture: ComponentFixture<CardServiceTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardServiceTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardServiceTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
