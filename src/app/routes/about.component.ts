import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  template: `Application built using Angular and Analog served with vite.
    Version: {{ version }}<br />
    <br />
    <a routerLink="/">Home</a>`,
  styles: [
    `
      :host {
        display: block;
        font-color: orange;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink],
})
export default class AboutComponent {
  protected readonly version = '1.0.0';
}
