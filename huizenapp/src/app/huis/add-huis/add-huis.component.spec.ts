import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHuisComponent } from './add-huis.component';

describe('AddHuisComponent', () => {
  let component: AddHuisComponent;
  let fixture: ComponentFixture<AddHuisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddHuisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddHuisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
