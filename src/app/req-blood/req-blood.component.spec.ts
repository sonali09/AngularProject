import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReqBloodComponent } from './req-blood.component';

describe('ReqBloodComponent', () => {
  let component: ReqBloodComponent;
  let fixture: ComponentFixture<ReqBloodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReqBloodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReqBloodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
