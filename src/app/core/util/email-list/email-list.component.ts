import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-email-list',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './email-list.component.html',
  styleUrl: './email-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmailListComponent { }
