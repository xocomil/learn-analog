import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  template: `
    <h1>Routing works!</h1>
    <hr />
    <div>Hello {{ world }}</div>
    <hr />
    <div><a [routerLink]="['/', 'about', 'component']">About</a></div>
  `,
  styles: [
    `
      :host {
        display: block;
        outline: 2px solid darkgreen;
        padding: 0.5rem;
      }

      h1 {
        color: green;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink],
})
export default class HomeComponent {
  protected world = 'world';
}
