import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HuisListComponent } from './huis-list.component';

describe('HuisListComponent', () => {
  let component: HuisListComponent;
  let fixture: ComponentFixture<HuisListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HuisListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HuisListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
