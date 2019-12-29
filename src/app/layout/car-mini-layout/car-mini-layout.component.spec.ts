import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarMiniLayoutComponent } from './car-mini-layout.component';

describe('CarMiniLayoutComponent', () => {
  let component: CarMiniLayoutComponent;
  let fixture: ComponentFixture<CarMiniLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarMiniLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarMiniLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
