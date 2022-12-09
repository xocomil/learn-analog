import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'learn-analog-root',
  template: ` <router-outlet></router-outlet> `,
  standalone: true,
  imports: [CommonModule, RouterOutlet],
})
export class AppComponent {
  title = 'learn-analog';
}
