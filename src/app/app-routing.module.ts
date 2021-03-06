import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAuthorComponent } from './add-author/add-author.component';
import { AddGenreComponent } from './add-genre/add-genre.component';
import { AuthorComponent } from './author/author.component';
import { GenresComponent } from './genres/genres.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { UpdAuthorComponent } from './upd-author/upd-author.component';
import { UpdGenreComponent } from './upd-genre/upd-genre.component';

const routes: Routes = [
  {path:'', redirectTo:'authors', pathMatch:'full'},
  {path:'authors',
    children:[
      {path:'', component: AuthorComponent},
      {path:'add-author', component: AddAuthorComponent},
      {path:'update/:id', component: UpdAuthorComponent}
    ]
  },
  {path:'genres',
    children:[
      {path:'',component: GenresComponent},
      {path:'add-genre', component: AddGenreComponent},
      {path:'update/:id', component: UpdGenreComponent}
    ]},
  {path:'**', component: NotFoundPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
