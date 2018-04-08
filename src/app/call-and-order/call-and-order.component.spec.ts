import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallAndOrderComponent } from './call-and-order.component';

describe('CallAndOrderComponent', () => {
  let component: CallAndOrderComponent;
  let fixture: ComponentFixture<CallAndOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallAndOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallAndOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
