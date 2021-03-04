import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { animalComponent } from './animal.component';

describe('animalComponent', () => {
  let component: animalComponent;
  let fixture: ComponentFixture<animalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ animalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(animalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
