import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetUSPage } from './meet-us.page';

describe('MeetUSPage', () => {
  let component: MeetUSPage;
  let fixture: ComponentFixture<MeetUSPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeetUSPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetUSPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
