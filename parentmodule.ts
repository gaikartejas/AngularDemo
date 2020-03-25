import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { Parent_compo } from './parentcompoenent';
import { Child_compo } from './childcomponent';
import {FormsModule} from '@angular/forms';

@NgModule({
imports:       [BrowserModule,FormsModule],
declarations: [Parent_compo,Child_compo],
exports:      [Parent_compo,Child_compo],
bootstrap:    [Parent_compo,Child_compo]


})
export class ParentModule
{

}