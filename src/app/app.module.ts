import { BrowserModule } from             '@angular/platform-browser';
import { NgModule } from                  '@angular/core';
import { FormsModule } from               '@angular/forms';
import { HttpModule } from                '@angular/http';
import { DateInputsModule } from          '@progress/kendo-angular-dateinputs';
import { GridModule } from                '@progress/kendo-angular-grid';
import { PopupModule } from               '@progress/kendo-angular-popup';
import { BrowserAnimationsModule } from   '@angular/platform-browser/animations';

import { AppComponent } from              './app.component';

import { MonthlyOverviewComponent } from  './page/monthly-overview/monthly-overview.component';
import { WeeklyOverviewComponent } from   './page/weekly-overview/weekly-overview.component';
import { DailyOverviewComponent } from    './page/daily-overview/daily-overview.component';
import { YearOverviewComponent } from     './page/year-overview/year-overview.component';
import { HabitTrackerComponent } from     './page/habit-tracker/habit-tracker.component';
import { BirthdayOverviewComponent } from './page/birthday-overview/birthday-overview.component';
import { ZodiacOverviewComponent } from   './page/zodiac-overview/zodiac-overview.component';


import { FooterComponent } from           './layout/footer/footer.component';
import { SettingsComponent } from         './layout/settings/settings.component';
import { LegendComponent } from           './layout/legend/legend.component';
import { BannerComponent } from           './layout/banner/banner.component';
import { JournalTabsComponent } from      './layout/journal-tabs/journal-tabs.component';
import { HeaderComponent } from           './layout/header/header.component';

import { WaterIntakeComponent } from      './widgets/water-intake/water-intake.component';


import { AppRoutingModule } from          './app-routing.module';
import { SocialOverviewComponent } from './page/social-overview/social-overview.component';

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
    BannerComponent,
    SocialOverviewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DateInputsModule,
    GridModule,
    PopupModule,
    BrowserAnimationsModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
