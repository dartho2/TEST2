import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { PortalComponent} from "./portal/portal.component";
// import { SectionComponent } from "./section/section.component";

const routes: Routes = [
    { path: '', component: HomeComponent, data: { title: 'Home' }},
    { path: ':portal', component: HomeComponent, data: { title: 'Portal' }},
    { path: ':portal/:section', component: HomeComponent, data: { title: 'sekcja' }}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})

export class AppRoutingModule {}