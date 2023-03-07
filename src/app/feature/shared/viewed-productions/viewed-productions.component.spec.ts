import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewedProductionsComponent } from './viewed-productions.component';

describe('ViewedProductionsComponent', () => {
  let component: ViewedProductionsComponent;
  let fixture: ComponentFixture<ViewedProductionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewedProductionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewedProductionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
