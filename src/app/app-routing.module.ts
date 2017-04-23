import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MonthlyOverviewComponent } from './monthly-overview/monthly-overview.component';
import { HabitTrackerComponent } from './habit-tracker/habit-tracker.component';
import { JournalTabsComponent } from './journal-tabs/journal-tabs.component';
import { WeeklyOverviewComponent } from './weekly-overview/weekly-overview.component';
import { DailyOverviewComponent } from './daily-overview/daily-overview.component';
import { BirthdayOverviewComponent } from './birthday-overview/birthday-overview.component';
import { YearOverviewComponent } from './year-overview/year-overview.component';
import { ZodiacOverviewComponent } from './zodiac-overview/zodiac-overview.component';


const routes: Routes = [
  { path: '', redirectTo: '/monthly-overview', pathMatch: 'full' },
  { path: 'monthly-overview',  component: MonthlyOverviewComponent },
  { path: 'weekly-overview', component: WeeklyOverviewComponent },
  { path: 'daily-overview',     component: DailyOverviewComponent },
  { path: 'birthday-overview', component: BirthdayOverviewComponent },
  { path: 'year-overview', component: YearOverviewComponent },
  { path: 'astrology', component: ZodiacOverviewComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}