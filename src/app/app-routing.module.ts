import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { OffersComponent } from './components/offers/offers.component';
import { HelpComponent } from './components/help/help.component';

const routes:Routes=[
  {
    path:'',component:HomeComponent,
  },
  {
    path:'offers',component:OffersComponent
  },
  {
    path:'help',component:HelpComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
