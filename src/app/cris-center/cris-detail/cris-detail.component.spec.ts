import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrisDetailComponent } from './cris-detail.component';

describe('CrisDetailComponent', () => {
  let component: CrisDetailComponent;
  let fixture: ComponentFixture<CrisDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrisDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrisDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
