import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { SiteHeader } from './components/site-header/site-header';
import { CHAPTERS } from './content/chapters';

@Component({
  imports: [RouterOutlet, RouterLink, SiteHeader],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  readonly chapters = CHAPTERS;
}
