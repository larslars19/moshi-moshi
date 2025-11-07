import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './2.html'
})
export class Registation2 {
  protected readonly title = signal('moshi-moshi');
}
