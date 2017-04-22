import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { GridModule } from '@progress/kendo-angular-grid';

import { AppComponent } from './app.component';
import { MonthlyOverviewComponent } from './monthly-overview/monthly-overview.component';
import { HabitTrackerComponent } from './habit-tracker/habit-tracker.component';
import { WaterIntakeComponent } from './water-intake/water-intake.component';
import { JournalTabsComponent } from './journal-tabs/journal-tabs.component';

@NgModule({
  declarations: [
    AppComponent,
    MonthlyOverviewComponent,
    HabitTrackerComponent,
    WaterIntakeComponent,
    JournalTabsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DateInputsModule,
    GridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
