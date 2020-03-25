import {Component} from '@angular/core'
@Component({

    selector:'child',
    templateUrl:'childcomponent.html'
})
export class Child_compo{
data:String;
temp;
getValuefromInput(event){
this.temp=event;


}
SetValue(){

    this.data=this.temp.target.value;
}
}