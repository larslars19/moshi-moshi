import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './registration.html'
})
export class RegistationPage {
  protected readonly title = signal('moshi-moshi');
}
