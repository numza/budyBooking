import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, model } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-top-nav',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    CommonModule,
    FormsModule,
    MatCardModule,
    MatDatepickerModule,
    MatFormFieldModule
  ],
  providers:[provideNativeDateAdapter()],
  templateUrl: './top-nav.component.html',
  styleUrl: './top-nav.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopNavComponent {
  @Input() type: any;
  openMenuOptions = false;
  openDate = false;
  destination = '';
  options = {
    adultNo: 1,
    childrenNo: 0,
    room: 1,
  };
  selected = model<Date | null>(null);

  
  constructor(public router: Router) {}

  ngOnInit(): void {
   
  }

  subtract(value: any, option: string) {
    if (option === 'adult')
      this.options.adultNo > 1 ? this.options.adultNo-- : this.options.adultNo;
    else if (option === 'children')
      this.options.childrenNo > 0
        ? this.options.childrenNo--
        : this.options.childrenNo;
    else if (option === 'room')
      this.options.room > 1 ? this.options.room-- : this.options.room;
    else return;
  }

  add(value: any, option: string) {
    console.log(value + option);
    if (option === 'adult') this.options.adultNo++;
    else if (option === 'children') this.options.childrenNo++;
    else if (option === 'room') this.options.room++;
    else return;
  }

  handleSearch() {
    
    this.router.navigate(['/hotels', { data: this.options }]);
  }
  
}
