import { Component, HostListener, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CHAPTERS, Chapter } from '../../content/chapters';

const SIZES = [16, 18, 20, 22, 24];
const STORAGE_KEY = 'fsr-font-size-index';

@Component({
  selector: 'page-chapter',
  imports: [RouterLink],
  templateUrl: './chapter.html',
  styleUrl: './chapter.css',
})
export class ChapterPage {
  private readonly route = inject(ActivatedRoute);

  readonly sizes = SIZES;
  readonly chapter: Chapter;

  readonly progress = signal(0);
  readonly fontIndex = signal(ChapterPage.loadFontIndex());

  readonly fontSize = computed(() => SIZES[this.fontIndex()]);

  readonly prev = computed(() => {
    const i = CHAPTERS.findIndex((c) => c.id === this.chapter.id);
    return i > 0 ? CHAPTERS[i - 1] : null;
  });

  readonly next = computed(() => {
    const i = CHAPTERS.findIndex((c) => c.id === this.chapter.id);
    return i >= 0 && i < CHAPTERS.length - 1 ? CHAPTERS[i + 1] : null;
  });

  readonly wordCount = computed(() =>
    this.chapter.paragraphs.join(' ').split(/\s+/).filter(Boolean).length,
  );

  readonly readingTime = computed(() => Math.max(1, Math.round(this.wordCount() / 200)));

  constructor() {
    const slug = this.route.snapshot.data['slug'];
    this.chapter = CHAPTERS.find((c) => c.slug === slug) ?? CHAPTERS[0];
  }

  smaller(): void {
    this.setFontIndex(this.fontIndex() - 1);
  }

  larger(): void {
    this.setFontIndex(this.fontIndex() + 1);
  }

  scrollTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  @HostListener('window:scroll')
  onScroll(): void {
    const doc = document.documentElement;
    const max = doc.scrollHeight - window.innerHeight;
    const pct = max > 0 ? (window.scrollY / max) * 100 : 0;
    this.progress.set(Math.min(100, Math.max(0, pct)));
  }

  private setFontIndex(i: number): void {
    const clamped = Math.min(SIZES.length - 1, Math.max(0, i));
    this.fontIndex.set(clamped);
    try {
      localStorage.setItem(STORAGE_KEY, String(clamped));
    } catch {
      /* armazenamento indisponível */
    }
  }

  private static loadFontIndex(): number {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw === null) return 2;
      const i = Number(raw);
      return Number.isInteger(i) && i >= 0 && i < SIZES.length ? i : 2;
    } catch {
      return 2;
    }
  }
}
