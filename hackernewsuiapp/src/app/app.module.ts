import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { RouterOutlet } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import {SearchComponent } from './components/search/search.component'
import {StoryListComponent } from './components/story-list/story-list.component'
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent,SearchComponent,StoryListComponent],
  bootstrap:[AppComponent],
  imports: [
    CommonModule,
    RouterOutlet,
    BrowserModule,HttpClientModule
  ]
})

export class AppModule { }
