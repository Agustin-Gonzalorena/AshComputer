import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentCompletePageComponent } from './payment-complete-page.component';

describe('PaymentCompletePageComponent', () => {
  let component: PaymentCompletePageComponent;
  let fixture: ComponentFixture<PaymentCompletePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentCompletePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentCompletePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
