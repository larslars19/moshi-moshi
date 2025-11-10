import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './404.html'
})
export class Page404 {
  protected readonly title = signal('moshi-moshi');
  
}
