import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { PortalComponent} from "./portal/portal.component"

const routes: Routes = [
    // Home page for first Page as 
    // { path: '', component: AppComponent, data: { title: 'Home' }},
    { path: '', component: HomeComponent, data: { title: 'Home' }},
    { path: ':portal', component: PortalComponent, data: { title: 'Portal' }},
    { path: ':portal/:section', component: PortalComponent, data: { title: 'sekcja' }}
   
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})

export class AppRoutingModule {}