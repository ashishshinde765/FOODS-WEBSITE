import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FOOD11Component } from './food11.component';

describe('FOOD11Component', () => {
  let component: FOOD11Component;
  let fixture: ComponentFixture<FOOD11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FOOD11Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FOOD11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
