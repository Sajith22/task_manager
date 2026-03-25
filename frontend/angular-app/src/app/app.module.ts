import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { TaskListComponent } from './components/task-list/task-list.component';

@NgModule({
  declarations: [
    
  ],
  imports: [
    BrowserModule,
    FormsModule 
            // For ngModel
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }