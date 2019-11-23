import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FBLACompetitiveEventsPage } from './fbla-competitive-events.page';

describe('FBLACompetitiveEventsPage', () => {
  let component: FBLACompetitiveEventsPage;
  let fixture: ComponentFixture<FBLACompetitiveEventsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FBLACompetitiveEventsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FBLACompetitiveEventsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
