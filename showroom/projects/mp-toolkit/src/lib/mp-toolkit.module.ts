import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { CardComponent } from './components/card/card.component';
import { CardModule } from 'primeng/card';
import { MenubarModule } from 'primeng/menubar';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';

@NgModule({
  declarations: [
    HeaderComponent,
    CardComponent
  ],
  imports: [
    CardModule,
    MenubarModule
  ],
  providers: [
    provideAnimationsAsync(),
    providePrimeNG({
        theme: {
            preset: Aura
        }
    })
  ],
  exports: [
    CardComponent,
    HeaderComponent
  ]
})
export class MpToolkitModule { }
