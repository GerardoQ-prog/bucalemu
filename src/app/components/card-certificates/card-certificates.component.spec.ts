import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCertificatesComponent } from './card-certificates.component';

describe('CardCertificatesComponent', () => {
  let component: CardCertificatesComponent;
  let fixture: ComponentFixture<CardCertificatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardCertificatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardCertificatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
