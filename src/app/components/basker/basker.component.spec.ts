import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaskerComponent } from './basker.component';

describe('BaskerComponent', () => {
  let component: BaskerComponent;
  let fixture: ComponentFixture<BaskerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BaskerComponent]
    });
    fixture = TestBed.createComponent(BaskerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
