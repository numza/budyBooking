import { Component } from '@angular/core';
import {MatListModule} from '@angular/material/list';

import { TopNavComponent } from '../../core/util/top-nav/top-nav.component';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [TopNavComponent,MatListModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
