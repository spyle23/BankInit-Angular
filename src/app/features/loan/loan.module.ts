import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoanCreateComponent } from './loan-create/loan-create.component';
import { LoanListComponent } from './loan-list/loan-list.component';
import { LoanCalendarComponent } from './loan-calendar/loan-calendar.component';



@NgModule({
  declarations: [
   LoanCreateComponent,
   LoanListComponent,
   LoanCalendarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoanCreateComponent,
    LoanListComponent
  ]
})
export class LoanModule { }
