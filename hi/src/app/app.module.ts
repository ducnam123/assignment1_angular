import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AddComponent } from './pages/admin/add/add.component';
import { AppRoutingModule } from './app-routing.module';
import { EditComponent } from './pages/admin/edit/edit.component';
import { DetailsComponent } from './pages/admin/details/details.component';
import { HomePageComponent } from './pages/layout/home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    EditComponent,
    DetailsComponent,
    HomePageComponent
  ],

  imports: [
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
