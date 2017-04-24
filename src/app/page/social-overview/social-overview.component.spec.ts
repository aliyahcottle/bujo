import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialOverviewComponent } from './social-overview.component';

describe('SocialOverviewComponent', () => {
  let component: SocialOverviewComponent;
  let fixture: ComponentFixture<SocialOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
