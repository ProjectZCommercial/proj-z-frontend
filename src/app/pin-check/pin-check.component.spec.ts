import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PinCheckComponent } from './pin-check.component';

describe('PinCheckComponent', () => {
  let component: PinCheckComponent;
  let fixture: ComponentFixture<PinCheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PinCheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PinCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
