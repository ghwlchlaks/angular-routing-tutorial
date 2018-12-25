import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrisListComponent } from './cris-list.component';

describe('CrisListComponent', () => {
  let component: CrisListComponent;
  let fixture: ComponentFixture<CrisListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrisListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrisListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
