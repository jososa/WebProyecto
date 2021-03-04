import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { animalDetailsComponent } from './animal-details.component';

describe('animalDetailsComponent', () => {
  let component: animalDetailsComponent;
  let fixture: ComponentFixture<animalDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ animalDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(animalDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
