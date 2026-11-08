import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SlicePipe } from '@angular/common';
import { CHAPTERS } from '../../content/chapters';

@Component({
  selector: 'page-home',
  imports: [RouterLink, SlicePipe],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class HomePage {
  readonly chapters = CHAPTERS;

  readonly totalPages = CHAPTERS.reduce((sum, c) => sum + c.pages, 0);

  readonly totalWords = CHAPTERS.reduce(
    (sum, c) => sum + c.paragraphs.join(' ').split(/\s+/).filter(Boolean).length,
    0,
  );

  readonly readingTime = Math.max(1, Math.round(this.totalWords / 200));
}
