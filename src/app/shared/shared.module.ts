import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { CardModule } from './components/card/card.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedRoutingModule,
    CardModule
  ],
  exports: [
    CardModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class SharedModule { }
