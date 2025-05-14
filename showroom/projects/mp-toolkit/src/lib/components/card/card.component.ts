import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'mp-card',
  standalone: true,
  imports: [CardModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

}
