import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map } from 'rxjs';

@Component({
  standalone: true,
  template: ` Your product is: {{ productId$ | async }}<br />
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
  imports: [AsyncPipe, RouterLink],
})
export default class ProductComponent {
  readonly #route = inject(ActivatedRoute);
  protected productId$ = this.#route.paramMap.pipe(
    map((paramMap) => paramMap.get('productId'))
  );
}
