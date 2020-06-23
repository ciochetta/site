import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from "./Main/Pages/landing-page/landing-page.component";
import { AboutPageComponent } from "./Main/Pages/about-page/about-page.component";
import { ProjectsPageComponent } from "./Main/Pages/projects-page/projects-page.component";
import { PostsPageComponent } from "./Main/Pages/posts-page/posts-page.component";


const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'projects', component: ProjectsPageComponent },
  { path: 'posts', component: PostsPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
