import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ZipFormComponent } from './zip-form/zip-form.component';
import { ZipListComponent } from './zip-list/zip-list.component';

const routes: Routes = [
  {
    path: '',
    component: ZipFormComponent,
  },
  {
    path: 'form',
    component: ZipFormComponent,
  },
  {
    path: 'forecast/:zipCode',
    component: ZipListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
