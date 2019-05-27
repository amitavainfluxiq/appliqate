import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompaffiliatesComponent } from './compaffiliates.component';

describe('CompaffiliatesComponent', () => {
  let component: CompaffiliatesComponent;
  let fixture: ComponentFixture<CompaffiliatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompaffiliatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompaffiliatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
