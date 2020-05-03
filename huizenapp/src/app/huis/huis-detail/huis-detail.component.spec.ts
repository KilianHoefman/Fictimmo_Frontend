import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HuisDetailComponent } from './huis-detail.component';

describe('HuisDetailComponent', () => {
  let component: HuisDetailComponent;
  let fixture: ComponentFixture<HuisDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HuisDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HuisDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
