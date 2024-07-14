import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-featured-property',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './featured-property.component.html',
  styleUrl: './featured-property.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeaturedPropertyComponent { }
