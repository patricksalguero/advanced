import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

/* ===================[MODULES]====================== */
import { SharedModule } from '../shared/shared.module'
import { ChartsModule } from 'ng2-charts'

/* ===================[COMPONENTS]====================== */
import { Grapth1Component } from './grapth1/grapth1.component'
import { ProgressComponent } from './progress/progress.component'
import { DashboardComponent } from './dashboard/dashboard.component'

/* ===================[ROUTES]====================== */
import { PAGES_ROUTES } from './pages.route'
import { IncrementComponent } from '../components/increment/increment.component'
import { GraphdoughnutComponent } from './../components/graphdoughnut/graphdoughnut.component'
import { AcountsettingsComponent } from './acountsettings/acountsettings.component'
import { PromisesComponent } from './promises/promises.component'
import { RxjsComponent } from './rxjs/rxjs.component'
import { ProfileComponent } from './profile/profile.component'
import { UsersComponent } from './users/users.component'
import { HospitalsComponent } from './hospitals/hospitals.component'
import { DoctorsComponent } from './doctors/doctors.component'
import { DoctorComponent } from './doctor.component'
import { FinderComponent } from './finder/finder.component'

/* ===================[PIPES]====================== */
import { PipesModule } from '../pipes/pipes.module'



@NgModule({
  declarations : [
    DashboardComponent,
    ProgressComponent,
    Grapth1Component,
    IncrementComponent,
    GraphdoughnutComponent,
    AcountsettingsComponent,
    PromisesComponent,
    RxjsComponent,
    ProfileComponent,
    UsersComponent,
    HospitalsComponent,
    DoctorsComponent,
    DoctorComponent,
    FinderComponent
  ],
  exports : [
    DashboardComponent,
    ProgressComponent,
    Grapth1Component
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    PAGES_ROUTES,
    ChartsModule,
    PipesModule
  ]
})

export class PagesModule {}
