import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestestComponent } from './testest.component';
import { TestestService } from './testest.service';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TestestComponent,
  ],
  exports: [
    TestestComponent,
  ],
  providers: [TestestService],
})
export class TestestModule { }
