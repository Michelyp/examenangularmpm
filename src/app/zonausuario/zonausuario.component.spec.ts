import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZonausuarioComponent } from './zonausuario.component';

describe('ZonausuarioComponent', () => {
  let component: ZonausuarioComponent;
  let fixture: ComponentFixture<ZonausuarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ZonausuarioComponent]
    });
    fixture = TestBed.createComponent(ZonausuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
