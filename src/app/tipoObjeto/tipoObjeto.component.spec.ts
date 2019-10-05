import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { tipoObjetoComponent } from './tipoObjeto.component';

describe('tipoObjetoComponent', () => {
  let component: tipoObjetoComponent;
  let fixture: ComponentFixture<tipoObjetoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ tipoObjetoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(tipoObjetoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
