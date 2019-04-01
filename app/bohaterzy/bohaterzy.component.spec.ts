import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BohaterzyComponent } from './bohaterzy.component';

describe('BohaterzyComponent', () => {
  let component: BohaterzyComponent;
  let fixture: ComponentFixture<BohaterzyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BohaterzyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BohaterzyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
