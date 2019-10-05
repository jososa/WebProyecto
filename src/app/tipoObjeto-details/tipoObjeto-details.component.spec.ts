import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { tipoObjetoDetailsComponent } from './tipoObjeto-details.component';

describe('tipoObjetoDetailsComponent', () => {
  let component: tipoObjetoDetailsComponent;
  let fixture: ComponentFixture<tipoObjetoDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ tipoObjetoDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(tipoObjetoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
