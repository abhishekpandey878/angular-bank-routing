import { Routes } from '@angular/router';
//import { HomeComponent} from "./home/home.component";
//import { AboutComponent} from "./about/about.component";
import { CardComponent} from "./cardNum/card.component";
//import { ParentComponent} from "./parent/parent.component";
//import { ChildComponent} from "./child/child.component";
//import { ChildoneComponent} from "./childone/childone.component";
//import { AuthService} from "./auth.guard";

export  const appRoutes :Routes = [
  {path : 'cardNum', component : CardComponent},
  //{path : 'home', component : HomeComponent,
    //canActivate:[AuthService], canActivateChild:[AuthService]},
  //{path : 'ab', component : ChildoneComponent},
  //{path : 'about', component : AboutComponent, canDeactivate:[AuthService]}

];