import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextimagesComponent } from './textimages.component';

describe('TextimagesComponent', () => {
  let component: TextimagesComponent;
  let fixture: ComponentFixture<TextimagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextimagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextimagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
