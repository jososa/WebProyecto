import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { administradorComponent } from './administrador.component';

describe('administradorComponent', () => {
  let component: administradorComponent;
  let fixture: ComponentFixture<administradorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ administradorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(administradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
