import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorComponent } from './author/author.component';
import { GenresComponent } from './genres/genres.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { AddAuthorComponent } from './add-author/add-author.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddGenreComponent } from './add-genre/add-genre.component';
import { UpdGenreComponent } from './upd-genre/upd-genre.component';
import { UpdAuthorComponent } from './upd-author/upd-author.component';




@NgModule({
  declarations: [
    AppComponent,
    AuthorComponent,
    GenresComponent,
    NotFoundPageComponent,
    AddAuthorComponent,
    AddGenreComponent,
    UpdGenreComponent,
    UpdAuthorComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
