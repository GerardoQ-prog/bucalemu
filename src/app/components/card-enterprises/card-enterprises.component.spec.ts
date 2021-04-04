import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardEnterprisesComponent } from './card-enterprises.component';

describe('CardEnterprisesComponent', () => {
  let component: CardEnterprisesComponent;
  let fixture: ComponentFixture<CardEnterprisesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardEnterprisesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardEnterprisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
