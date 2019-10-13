import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from "../core/core.module";
import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';

import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { effects, reducers } from "./store";
import { services } from './services';
import { TwitterSearchRoutingModule } from './twittersearch-routing.module';

import { TwitterSearchComponent } from './twittersearch.component';
import {PanelModule} from 'primeng/panel';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';


@NgModule({
  declarations: [
    TwitterSearchComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    FormsModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreModule.forFeature('search', reducers),
    EffectsModule.forFeature(effects),
    CardModule,
    InputTextModule,
    TwitterSearchRoutingModule,
    PanelModule,
    ButtonModule
  ],
  providers: [
    ...services
  ],
  entryComponents: []
})
export class TwitterSearchModule { }
