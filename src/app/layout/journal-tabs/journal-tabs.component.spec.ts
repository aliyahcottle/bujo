import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JournalTabsComponent } from './journal-tabs.component';

describe('JournalTabsComponent', () => {
  let component: JournalTabsComponent;
  let fixture: ComponentFixture<JournalTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JournalTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JournalTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
