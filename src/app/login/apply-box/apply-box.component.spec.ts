import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyBoxComponent } from './apply-box.component';

describe('ApplyBoxComponent', () => {
  let component: ApplyBoxComponent;
  let fixture: ComponentFixture<ApplyBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplyBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
