import { NgModule } from "@angular/core";
import { Child2Component } from './child2/child2.component';
import {SharedService} from './services/shared.service';
@NgModule({
  declarations:[Child2Component],
  exports:[Child2Component],
  providers:[SharedService]

})
export class SecondModule{

}
