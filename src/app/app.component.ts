import { Component, HostListener, OnInit, signal } from '@angular/core';
import { RevealDirective } from './shared/reveal.directive';

interface Project {
  number: string;
  title: string;
  type: string;
  description: string;
  stack: string[];
  repo?: string;
  live?: string;
  theme: 'fbs' | 'hrms' | 'amazon' | 'quiz';
  featured?: boolean;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  protected readonly introVisible = signal(true);
  protected readonly menuOpen = signal(false);
  protected readonly currentYear = new Date().getFullYear();

  protected readonly projects: Project[] = [
    {
      number: '01',
      title: 'FBS Contracting',
      type: 'Corporate Construction Microsite',
      description: 'A premium Angular experience for a Saudi contracting company, built around strong motion, bilingual RTL/LTR UX, selected projects and an interactive Saudi project footprint.',
      stack: ['Angular 21', 'Signals', 'SCSS', 'Localization', 'RTL/LTR', 'SVG Motion'],
      repo: 'https://github.com/omargamal-og/fbs-contracting-demo',
      theme: 'fbs',
      featured: true
    },
    {
      number: '02',
      title: 'Buy2 HRMS',
      type: 'Enterprise HR Management Platform',
      description: 'Production-oriented HR workflows covering employee management, performance, recognitions, points and rewards, API states, multilingual interfaces and reusable Angular UI patterns.',
      stack: ['Angular', 'TypeScript', 'RxJS', 'REST APIs', 'Reactive Forms', 'Tailwind', 'RTL'],
      repo: 'https://github.com/Moha-sami/HR_System',
      live: 'https://hr-system-rosy.vercel.app/',
      theme: 'hrms',
      featured: true
    },
    {
      number: '03',
      title: 'Amazon UI',
      type: 'Responsive Commerce Frontend',
      description: 'An earlier frontend build focused on responsive composition, product presentation and JavaScript-powered interactions across desktop and mobile layouts.',
      stack: ['HTML5', 'CSS3', 'JavaScript', 'Responsive UI'],
      repo: 'https://github.com/omargamal-og/Amazon-Project',
      live: 'https://omargamal-og.github.io/Amazon-Project/',
      theme: 'amazon'
    },
    {
      number: '04',
      title: 'Quiz App',
      type: 'Interactive JavaScript Experience',
      description: 'A lightweight interactive quiz with dynamic question rendering, score tracking and instant feedback, built to sharpen DOM and state fundamentals.',
      stack: ['JavaScript', 'DOM', 'CSS3', 'Responsive UI'],
      repo: 'https://github.com/omargamal-og/Quiz-App',
      live: 'https://omargamal-og.github.io/Quiz-App/',
      theme: 'quiz'
    }
  ];

  ngOnInit(): void {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      this.introVisible.set(false);
      return;
    }

    window.setTimeout(() => this.introVisible.set(false), 2200);
  }

  protected skipIntro(): void {
    this.introVisible.set(false);
  }

  protected toggleMenu(): void {
    this.menuOpen.update((value) => !value);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }

  @HostListener('window:mousemove', ['$event'])
  protected onMouseMove(event: MouseEvent): void {
    document.documentElement.style.setProperty('--mouse-x', `${event.clientX}px`);
    document.documentElement.style.setProperty('--mouse-y', `${event.clientY}px`);
  }
}
