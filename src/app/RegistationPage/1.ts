import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './1.html'
})
export class Registation1 {
  protected readonly title = signal('moshi-moshi');
}
