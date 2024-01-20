import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StarredComponent } from './components/starred/starred.component';

const routes: Routes = [
  {
    path: '',
    data: {
        title: 'Starred'
    },
    children: [
      {
        path: '',
        component: StarredComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StarredRoutingModule { }
