import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BirthdayOverviewComponent } from './birthday-overview.component';

describe('BirthdayOverviewComponent', () => {
  let component: BirthdayOverviewComponent;
  let fixture: ComponentFixture<BirthdayOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BirthdayOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BirthdayOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
