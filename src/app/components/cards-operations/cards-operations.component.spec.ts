import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsOperationsComponent } from './cards-operations.component';

describe('CardsOperationsComponent', () => {
  let component: CardsOperationsComponent;
  let fixture: ComponentFixture<CardsOperationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsOperationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsOperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
