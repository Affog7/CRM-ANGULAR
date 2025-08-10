import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {ClientListComponent} from './components/client-list/client-list.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'CRM-Dashboard';
}
