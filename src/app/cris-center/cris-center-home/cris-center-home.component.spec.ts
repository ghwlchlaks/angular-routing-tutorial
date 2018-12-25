import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrisCenterHomeComponent } from './cris-center-home.component';

describe('CrisCenterHomeComponent', () => {
  let component: CrisCenterHomeComponent;
  let fixture: ComponentFixture<CrisCenterHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrisCenterHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrisCenterHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
