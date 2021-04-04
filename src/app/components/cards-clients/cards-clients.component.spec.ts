import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsClientsComponent } from './cards-clients.component';

describe('CardsClientsComponent', () => {
  let component: CardsClientsComponent;
  let fixture: ComponentFixture<CardsClientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsClientsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
