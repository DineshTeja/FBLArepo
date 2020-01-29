import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FblaSignUpPage } from './fbla-sign-up.page';

describe('FblaSignUpPage', () => {
  let component: FblaSignUpPage;
  let fixture: ComponentFixture<FblaSignUpPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FblaSignUpPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FblaSignUpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
