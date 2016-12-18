import {NgModule}             from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ConfigDetailComponent} from './config-detail/config-detail.component';

const routes: Routes = [
    {path: 'configDetail/:id',  component:  ConfigDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
