import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LandingPageComponent } from './Main/Pages/landing-page/landing-page.component';
import { AboutPageComponent } from './Main/Pages/about-page/about-page.component';
import { ProjectsPageComponent } from './Main/Pages/projects-page/projects-page.component';
import { PostsPageComponent } from './Main/Pages/posts-page/posts-page.component';
import { AnimatedBackgroundComponent } from './components/animated-background/animated-background.component';
import { ServicesSectionComponent } from './components/services-section/services-section.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LandingPageComponent,
    AboutPageComponent,
    ProjectsPageComponent,
    PostsPageComponent,
    AnimatedBackgroundComponent,
    ServicesSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
