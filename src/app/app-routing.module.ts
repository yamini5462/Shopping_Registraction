import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElectronicsComponent } from './components/electronics/electronics.component';
import { FashionComponent } from './components/fashion/fashion.component';
import { FootwearComponent } from './components/footwear/footwear.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ManagerComponent } from './components/manager/manager.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { RegisterComponent } from './components/register/register.component';
import { SearchComponent } from './components/search/search.component';
import { ShoppingComponent } from './components/shopping/shopping.component';
import { ManagerGuard } from './guards/manager.guard';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'electronics', component: ElectronicsComponent },
  {path: 'footwear', component: FootwearComponent},
  {path: 'fashion', component: FashionComponent},
  {path: 'home', redirectTo: '', pathMatch: 'full' },
  {path: 'search/:id/:name/:price', component: SearchComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'shopping', component: ShoppingComponent},
  {path: 'manager', component: ManagerComponent, canActivate: [ManagerGuard]},
  {path: '**', component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
