import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from '../app/home/home.component'
import {ContactComponent} from '../app/contact/contact.component'
import {ServicesComponent} from '../app/services/services.component'
import {CompaffiliatesComponent} from '../app/compaffiliates/compaffiliates.component'
import {BlockchainComponent} from '../app/blockchain/blockchain.component'
import {OurteamComponent} from '../app/ourteam/ourteam.component'


const routes: Routes = [
  /*{path:'home', component: HomeComponent}*/
  {path:'', component: HomeComponent},
  {path:'contact', component: ContactComponent},
  {path:'services', component: ServicesComponent},
  {path:'compaffiliates', component: CompaffiliatesComponent},
  {path:'blockchain', component: BlockchainComponent},
  {path:'ourteam', component: OurteamComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
