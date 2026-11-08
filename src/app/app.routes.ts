import { Routes } from '@angular/router';
import { HomePage } from './pages/home/home';
import { ChapterPage } from './pages/chapter/chapter';

export const routes: Routes = [
  { path: '', component: HomePage, title: 'Forsaken Souls: ReMaster' },
  {
    path: 'capitulo-1',
    component: ChapterPage,
    data: { slug: 'capitulo-1' },
    title: 'Capítulo 1 — Forsaken Souls: ReMaster',
  },
  {
    path: 'capitulo-2',
    component: ChapterPage,
    data: { slug: 'capitulo-2' },
    title: 'Capítulo 2 — Forsaken Souls: ReMaster',
  },
  {
    path: 'capitulo-3',
    component: ChapterPage,
    data: { slug: 'capitulo-3' },
    title: 'Capítulo 3 — Forsaken Souls: ReMaster',
  },
  { path: '**', redirectTo: '' },
];
