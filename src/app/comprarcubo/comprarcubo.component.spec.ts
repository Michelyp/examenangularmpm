import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprarcuboComponent } from './comprarcubo.component';

describe('ComprarcuboComponent', () => {
  let component: ComprarcuboComponent;
  let fixture: ComponentFixture<ComprarcuboComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComprarcuboComponent]
    });
    fixture = TestBed.createComponent(ComprarcuboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
