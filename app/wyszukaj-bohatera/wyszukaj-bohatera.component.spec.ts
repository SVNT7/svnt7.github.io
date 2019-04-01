import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WyszukajBohateraComponent } from './wyszukaj-bohatera.component';

describe('WyszukajBohateraComponent', () => {
  let component: WyszukajBohateraComponent;
  let fixture: ComponentFixture<WyszukajBohateraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WyszukajBohateraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WyszukajBohateraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
