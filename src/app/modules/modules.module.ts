import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EcommerceComponent } from './ecommerce/ecommerce.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { NgApexchartsModule } from "ng-apexcharts";
import { CalenderComponent } from './calender/calender.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';



@NgModule({
  declarations: [
    EcommerceComponent,
    AnalyticsComponent,
    CalenderComponent
  ],
  imports: [
    CommonModule,
    NgApexchartsModule,

    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    })
  ]
})
export class ModulesModule { }
