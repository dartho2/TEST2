import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import {RouterModule} from '@angular/router';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {AppRoutingModule} from './app.routing';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {PortalComponent} from './portal/portal.component';
import {SectionComponent} from './section/section.component';
import {ContentComponent} from './containers/content/content.component';
import {TextimagesComponent} from './containers/textimages/textimages.component';
import {GalleryComponent} from './containers/gallery/gallery.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TextComponent} from './containers/text/text.component'


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PortalComponent,
    SectionComponent,
    ContentComponent,
    TextimagesComponent,
    GalleryComponent,
    TextComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
