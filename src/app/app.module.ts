import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import {RouterModule} from '@angular/router';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {FormsModule}   from '@angular/forms';
import {AppRoutingModule} from './app.routing';
import {MatStepperModule} from '@angular/material/stepper';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {PortalComponent} from './portal/portal.component';
import {SectionComponent} from './portal/section/section.component';
import {ContentComponent} from './portal/section/content/content.component';
import {TextimagesComponent} from './portal/section/content/content_item/textimages/textimages.component';
import {GalleryComponent} from './portal/section/content/content_item/gallery/gallery.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TextComponent} from './portal/section/content/content_item/text/text.component';
import {ListComponent} from './portal/section/content/content_item/list/list.component';
import {TableComponent} from './portal/section/content/content_item/table/table.component';
import {FacebookModule} from 'ngx-facebook';
import {FbComponent} from '../app/portal/section/content/content_item/fb/fb.component';
import {FooterComponent} from './layout/footer/footer.component';
import {HeaderComponent} from './layout/header/header.component';
import {ContactComponent} from './portal/section/content/content_item/contact/contact.component';
import {BoxComponent} from './portal/section/content/content_item/box/box.component';
import {BoxLinkComponent} from './portal/section/content/content_item/box_link/box_link.component';
import {MatDialogModule} from '@angular/material/dialog';
import {DialogComponent} from './portal/section/content/content_item/dialog/dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PortalComponent,
    SectionComponent,
    ContentComponent,
    TextimagesComponent,
    GalleryComponent,
    TextComponent,
    ListComponent,
    TableComponent,
    FbComponent,
    FooterComponent,
    HeaderComponent,
    ContactComponent,
    BoxComponent,
    DialogComponent,
    BoxLinkComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    MatDialogModule,
    HttpClientModule,
    MatStepperModule,
    FacebookModule.forRoot()
  ],
  entryComponents: [
    DialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
