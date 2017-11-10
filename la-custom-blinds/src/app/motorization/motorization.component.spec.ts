import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MotorizationComponent } from './motorization.component';

describe('MotorizationComponent', () => {
  let component: MotorizationComponent;
  let fixture: ComponentFixture<MotorizationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MotorizationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MotorizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
