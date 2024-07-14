import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TopNavComponent } from "../../../core/util/top-nav/top-nav.component";
import { MAT_FORM_FIELD, MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { SearchItemComponent } from "../../../core/util/search-item/search-item.component";


@Component({
    selector: 'app-list',
    standalone: true,
    templateUrl: './list.component.html',
    styleUrl: './list.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
    CommonModule,
    TopNavComponent,
    MatFormFieldModule,
    MatNativeDateModule,
    MatButtonModule,
    SearchItemComponent
]
})
export class ListComponent { }
