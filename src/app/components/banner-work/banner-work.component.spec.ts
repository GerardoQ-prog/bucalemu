import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerWorkComponent } from './banner-work.component';

describe('BannerWorkComponent', () => {
  let component: BannerWorkComponent;
  let fixture: ComponentFixture<BannerWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerWorkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
