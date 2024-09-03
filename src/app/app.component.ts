import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TwoWayComponent } from './two-way/two-way.component';
import { TodoComponent } from './todo/todo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TwoWayComponent, TodoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-starter';
}
