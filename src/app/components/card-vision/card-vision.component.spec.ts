import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardVisionComponent } from './card-vision.component';

describe('CardVisionComponent', () => {
  let component: CardVisionComponent;
  let fixture: ComponentFixture<CardVisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardVisionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardVisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
