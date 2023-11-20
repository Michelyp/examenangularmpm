import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListacubosComponent } from './listacubos.component';

describe('ListacubosComponent', () => {
  let component: ListacubosComponent;
  let fixture: ComponentFixture<ListacubosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListacubosComponent]
    });
    fixture = TestBed.createComponent(ListacubosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
