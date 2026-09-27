import { Component } from '@angular/core';
import { Hobby } from './components/hobby/hobby';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Hobby],
  templateUrl: './app.html'
})
export class App {
}