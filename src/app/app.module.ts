import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Component/navbar/navbar.component';
import { HomeComponent } from './Component/home/home.component';
import { HeaderComponent } from './Component/header/header.component';
import { FooterComponent } from './Component/footer/footer.component';
import { PortfolioComponent } from './Component/portfolio/portfolio.component';
import { AboutComponent } from './Component/about/about.component';
import { ContactComponent } from './Component/contact/contact.component';
import { HeaderFirstSectionComponent } from './Component/header-first-section/header-first-section.component';
import { UsableComponent } from './Component/usable/usable.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FirstFooterComponent } from './Component/first-footer/first-footer.component';
import { SecondFooterComponent } from './Component/second-footer/second-footer.component';
import { ArrowComponent } from './Component/arrow/arrow.component';
import { ImageComponent } from './Component/image/image.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    PortfolioComponent,
    AboutComponent,
    ContactComponent,
    HeaderFirstSectionComponent,
    UsableComponent,
    FirstFooterComponent,
    SecondFooterComponent,
    ArrowComponent,
    ImageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
