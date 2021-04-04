import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardOperationComponent } from './card-operation.component';

describe('CardOperationComponent', () => {
  let component: CardOperationComponent;
  let fixture: ComponentFixture<CardOperationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardOperationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
