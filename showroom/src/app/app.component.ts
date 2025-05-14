import { Component } from '@angular/core';
import { CardComponent } from '../../projects/mp-toolkit/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [CardComponent],
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'showroom';
}
