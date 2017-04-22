import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZodiacOverviewComponent } from './zodiac-overview.component';

describe('ZodiacOverviewComponent', () => {
  let component: ZodiacOverviewComponent;
  let fixture: ComponentFixture<ZodiacOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZodiacOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZodiacOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
