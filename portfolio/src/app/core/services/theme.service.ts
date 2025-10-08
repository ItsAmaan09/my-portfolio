import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private _theme = new BehaviorSubject<'light' | 'dark'>('light');
  theme$ = this._theme.asObservable();
  constructor() {}

  toggleTheme() {
    const newTheme = this._theme.value === 'light' ? 'dark' : 'light';
    this._theme.next(newTheme);
    document.body.setAttribute('data-theme', newTheme);
  }
}
