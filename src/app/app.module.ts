import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArlasMapService, ArlasToolKitModule } from 'arlas-wui-toolkit';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MapComponent } from './components/map/map.component';
import {
  AbstractArlasMapService,
  ArlasMapFrameworkService,
  ArlasMapModule,
  BasemapService,
  LegendService
} from 'arlas-map';
import { MatRadioButton, MatRadioGroup } from '@angular/material/radio';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { ArlasMapboxModule, ArlasMapboxService, MapboxBasemapService, MapboxLegendService } from 'arlas-mapbox';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ArlasToolKitModule,
    ArlasMapModule,
    MatRadioButton,
    MatRadioGroup,
    MatButton,
    MatIconButton,
    MatIcon,
    ArlasMapModule,
    ArlasMapboxModule,
    FormsModule
  ],
  providers: [
    provideAnimationsAsync(),
    {
      provide: AbstractArlasMapService,
      useClass: ArlasMapService
    },
    ArlasMapService,
    {
      provide: BasemapService,
      useClass: MapboxBasemapService
    },
    {
      provide: LegendService,
      useClass: MapboxLegendService
    },
    {
      provide: ArlasMapFrameworkService,
      useClass: ArlasMapboxService
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
