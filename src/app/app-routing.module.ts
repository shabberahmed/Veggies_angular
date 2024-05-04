import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { OffersComponent } from './components/offers/offers.component';
import { HelpComponent } from './components/help/help.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { CompareComponent } from './components/compare/compare.component';

const routes:Routes=[
  {
    path:'',component:HomeComponent,
  },
  {
    path:'offers',component:OffersComponent
  },
  {
    path:'help',component:HelpComponent
  },{
    path:'wishlist',component:WishlistComponent
  },
  {
    path:'contactus',component:ContactusComponent
  },
  {
    path:'compare',component:CompareComponent
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
