import { NgModule } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { CardModule } from 'primeng/card';
import { MenubarModule } from 'primeng/menubar';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';

@NgModule({
  declarations: [
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
  ]
})
export class MpToolkitModule { }
