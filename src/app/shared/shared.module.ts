import { NgModule } from '@angular/core';

/* ===================[COMPONENTS]====================== */
import { BreadcrumComponent } from './breadcrum/breadcrum.component';
import { NofoundComponent } from './nofound/nofound.component';
import { HeaderComponent } from './header/header.component';
import { SidebardComponent } from './sidebard/sidebard.component';

@NgModule({
  declarations:[
    HeaderComponent,
    NofoundComponent,
    BreadcrumComponent,
    SidebardComponent
  ],
  exports:[
    HeaderComponent,
    NofoundComponent,
    BreadcrumComponent,
    SidebardComponent
  ]
})

export class SharedModule {}