import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurteampopupComponent } from './ourteampopup.component';

describe('OurteampopupComponent', () => {
  let component: OurteampopupComponent;
  let fixture: ComponentFixture<OurteampopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurteampopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurteampopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
