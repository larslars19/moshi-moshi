import { Component, signal } from '@angular/core'
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './registration.html',
})
export class RegistationPage {
  protected readonly title = signal('moshi-moshi');
}