import { Component, signal } from '@angular/core';

@Component({
  templateUrl: './home.html',
})
export class HomePage {
  protected readonly title = signal('moshi-moshi');
  
}
