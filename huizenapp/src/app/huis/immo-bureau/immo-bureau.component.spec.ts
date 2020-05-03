import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImmoBureauComponent } from './immo-bureau.component';

describe('ImmoBureauComponent', () => {
  let component: ImmoBureauComponent;
  let fixture: ComponentFixture<ImmoBureauComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImmoBureauComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImmoBureauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
