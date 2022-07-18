import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './shared/components/userChild/user.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'user',
    component: UserComponent,
  },
  {
    path: 'admin',
    loadChildren: () => import('./modules/admin/admin.module').then(mod => mod.AdminModule)
  },
  {
    path: 'guest',
    loadChildren: () => import('./modules/guest/guest.module').then(mod => mod.GuestModule)
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
