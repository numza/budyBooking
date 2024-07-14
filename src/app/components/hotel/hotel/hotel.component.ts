import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TopNavComponent } from '../../../core/util/top-nav/top-nav.component';
import { MatButtonModule } from '@angular/material/button';
import { EmailListComponent } from '../../../core/util/email-list/email-list.component';
import { FooterComponent } from '../../../core/util/footer/footer.component';

@Component({
  selector: 'app-hotel',
  standalone: true,
  imports: [
    CommonModule,
    TopNavComponent,
    MatButtonModule,
    EmailListComponent,
    FooterComponent,
  ],
  templateUrl: './hotel.component.html',
  styleUrl: './hotel.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HotelComponent {
  slideNum: number = 0;
  openSlider: boolean = false;
  images = [
    {
      image: '../../../../assets/architecture-building-chairs-2034335.jpg',
    },
    {
      image:
        '../../../../assets/MagazineUnlock/magazine-unlock-01-2.3.2023042401-_0DEFCA52D60F0D8CF35186C638BD24D4.jpg',
    },
    {
      image:
        '../../../../assets/MagazineUnlock/magazine-unlock-01-2.3.2023042401-_0EA1C7B87E782220341B34C7C7D3FE87.jpg',
    },
    {
      image: '../../../../assets/architecture-building-chairs-2034335.jpg',
    },
    {
      image: '../../../../assets/architecture-building-chairs-2034335.jpg',
    },
    {
      image: '../../../../assets/architecture-building-chairs-2034335.jpg',
    },
    {
      image:
        '../../../../assets/MagazineUnlock/magazine-unlock-01-2.3.2023042401-_0DEFCA52D60F0D8CF35186C638BD24D4.jpg',
    },
  ];

  setSlideNumber(index: number) {
    if (!this.openSlider) {
      this.slideNum = index;
      this.openSlider = !this.openSlider;
    }
  }

  closeSlider() {
    this.openSlider = false;
    this.slideNum = 0;
  }

  nextSlider() {
    if (this.images.length - 1 >= this.slideNum) {
      if (this.slideNum >= this.images.length - 1) {
        this.slideNum = 0;
        
      } else {
        this.slideNum++;
      }
    }
  }

  prevSlider() {
    if (this.slideNum >= 0) {
      if (this.slideNum == 0) {
        this.slideNum = this.images.length - 1;
        
      } else {
        this.slideNum--;
      }
    }
  }
}
