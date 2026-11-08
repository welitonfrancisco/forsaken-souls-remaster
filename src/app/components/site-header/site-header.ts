import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CHAPTERS } from '../../content/chapters';

@Component({
  selector: 'site-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './site-header.html',
  styleUrl: './site-header.css',
})
export class SiteHeader {
  readonly chapters = CHAPTERS;
}
