import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { CardComponent } from './components/card/card.component';
import { CardModule } from 'primeng/card';
import { MenubarModule } from 'primeng/menubar';


@NgModule({
  declarations: [
    HeaderComponent,
    CardComponent
  ],
  imports: [
    CardModule,
    MenubarModule
  ],
  exports: [
    CardComponent,
    HeaderComponent
  ]
})
export class MpToolkitModule { }
