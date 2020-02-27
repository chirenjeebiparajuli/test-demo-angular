import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CardListComponent} from './card-list/cardlist.component';
import {CardComponent} from './card-list/card/card.component';
import { HttpClientModule } from '@angular/common/http';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {DialogComponent} from './dialog/dialog.component'
@NgModule({
  declarations: [
    AppComponent , CardListComponent, CardComponent, DialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule, HttpClientModule, MatInputModule, MatButtonModule, MatGridListModule, MatCardModule, MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ DialogComponent ]
})
export class AppModule { }
