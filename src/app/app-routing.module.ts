import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAuthorComponent } from './add-author/add-author.component';
import { AuthorComponent } from './author/author.component';
import { GenresComponent } from './genres/genres.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';

const routes: Routes = [
  {path:'', redirectTo:'authors', pathMatch:'full'},
  {path:'authors',
    children:[
      {path:'', component: AuthorComponent},
      {path:'add-author', component: AddAuthorComponent}
    ]
  },
  {path:'genres', component: GenresComponent},
  {path:'**', component: NotFoundPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
