import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/layout/home-page/home-page.component';
import { AddComponent } from './pages/admin/add/add.component';
import { EditComponent } from './pages/admin/edit/edit.component';
import { DetailsComponent } from './pages/admin/details/details.component';


  const routes: Routes = [
  {
    path: 'admin', component: HomePageComponent, children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomePageComponent },
      { path: 'product', component: DetailsComponent },
      { path: 'product/add', component: AddComponent },
      { path: 'product/:id/edit', component: EditComponent }
    ]
  },
  ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}