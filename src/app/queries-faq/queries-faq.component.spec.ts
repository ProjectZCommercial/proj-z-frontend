import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueriesFaqComponent } from './queries-faq.component';

describe('QueriesFaqComponent', () => {
  let component: QueriesFaqComponent;
  let fixture: ComponentFixture<QueriesFaqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueriesFaqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueriesFaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
