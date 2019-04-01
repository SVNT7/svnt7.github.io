import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SzczegolyBohaterowComponent } from './szczegoly-bohaterow.component';

describe('SzczegolyBohaterowComponent', () => {
  let component: SzczegolyBohaterowComponent;
  let fixture: ComponentFixture<SzczegolyBohaterowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SzczegolyBohaterowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SzczegolyBohaterowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
