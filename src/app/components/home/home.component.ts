import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TopNavComponent } from '../../core/util/top-nav/top-nav.component';
import { FeaturedComponent } from '../../core/util/featured/featured.component';
import { PropertyListComponent } from '../../core/util/property-list/property-list.component';
import { FeaturedPropertyComponent } from '../../core/util/featured-property/featured-property.component';
import { EmailListComponent } from '../../core/util/email-list/email-list.component';
import { FooterComponent } from '../../core/util/footer/footer.component';
@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: `./home.component.html`,
  styleUrl: './home.component.css',
  imports: [
    CommonModule,
    TopNavComponent,
    FeaturedComponent,
    PropertyListComponent,
    FeaturedPropertyComponent,
    EmailListComponent,
    FooterComponent,
  ],
  
})
export class HomeComponent {}
