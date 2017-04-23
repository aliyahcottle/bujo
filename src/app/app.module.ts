import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { GridModule } from '@progress/kendo-angular-grid';
import { PopupModule } from '@progress/kendo-angular-popup';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MonthlyOverviewComponent } from './monthly-overview/monthly-overview.component';
import { HabitTrackerComponent } from './habit-tracker/habit-tracker.component';
import { WaterIntakeComponent } from './water-intake/water-intake.component';
import { JournalTabsComponent } from './journal-tabs/journal-tabs.component';
import { HeaderComponent } from './header/header.component';
import { WeeklyOverviewComponent } from './weekly-overview/weekly-overview.component';
import { DailyOverviewComponent } from './daily-overview/daily-overview.component';
import { BirthdayOverviewComponent } from './birthday-overview/birthday-overview.component';
import { YearOverviewComponent } from './year-overview/year-overview.component';
import { ZodiacOverviewComponent } from './zodiac-overview/zodiac-overview.component';
import { FooterComponent } from './footer/footer.component';
import { SettingsComponent } from './settings/settings.component';
import { LegendComponent } from './legend/legend.component';
import { BannerComponent } from './banner/banner.component';

@NgModule({
  declarations: [
    AppComponent,
    MonthlyOverviewComponent,
    HabitTrackerComponent,
    WaterIntakeComponent,
    JournalTabsComponent,
    HeaderComponent,
    WeeklyOverviewComponent,
    DailyOverviewComponent,
    BirthdayOverviewComponent,
    YearOverviewComponent,
    ZodiacOverviewComponent,
    FooterComponent,
    SettingsComponent,
    LegendComponent,
    BannerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DateInputsModule,
    GridModule,
    PopupModule,
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
