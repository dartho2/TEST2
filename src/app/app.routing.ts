import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { PortalComponent} from "./portal/portal.component";
// import { SectionComponent } from "./section/section.component";

const routes: Routes = [
    // Home page for first Page as 
    { path: '', component: HomeComponent, data: { title: 'Home' }},
    { path: ':portal', component: HomeComponent, data: { title: 'Portal' }},
    { path: ':portal/:section', component: HomeComponent, data: { title: 'sekcja' }}
    // { path: '', component: HomeComponent,
    //     children: [
    //         {path: ':portal', component: HomeComponent}
    //     ]}
    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})

export class AppRoutingModule {}