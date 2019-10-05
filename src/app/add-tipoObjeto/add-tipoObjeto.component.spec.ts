import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtipoObjetoComponent } from './add-tipoObjeto.component';

describe('AddtipoObjetoComponent', () => {
  let component: AddtipoObjetoComponent;
  let fixture: ComponentFixture<AddtipoObjetoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddtipoObjetoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddtipoObjetoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
