import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjetoDetailsComponent } from './Objeto-details.component';

describe('ObjetoDetailsComponent', () => {
  let component: ObjetoDetailsComponent;
  let fixture: ComponentFixture<ObjetoDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObjetoDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjetoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
