import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrialAnimationComponent } from './trial-animation.component';

describe('TrialAnimationComponent', () => {
  let component: TrialAnimationComponent;
  let fixture: ComponentFixture<TrialAnimationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrialAnimationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrialAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
