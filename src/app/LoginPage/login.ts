import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './login.html'
})
export class LoginPage {
  protected readonly title = signal('moshi-moshi');
  
}
