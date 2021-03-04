import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { usuarioDetailsComponent } from './usuario-details.component';

describe('usuarioDetailsComponent', () => {
  let component: usuarioDetailsComponent;
  let fixture: ComponentFixture<usuarioDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ usuarioDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(usuarioDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
