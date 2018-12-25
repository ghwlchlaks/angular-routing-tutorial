import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrisCenterComponent } from './cris-center.component';

describe('CrisCenterComponent', () => {
  let component: CrisCenterComponent;
  let fixture: ComponentFixture<CrisCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrisCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrisCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
