import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-item',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './search-item.component.html',
  styleUrl: './search-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchItemComponent {
  constructor(private router: Router) {}

  seeAvailability() {
    this.router.navigate(['/hotels/123']);
  }
}
