import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { EditorStore } from '../../services';
import { CanvasFormsComponent } from './forms/canvas-forms/canvas-forms.component';

@Component({
  selector: 'property-form',
  templateUrl: './property-form.component.html',
  styleUrls: ['./property-form.component.less'],
  encapsulation: ViewEncapsulation.None,
})
export class PropertyFormComponent implements OnInit {
  formComponent$: Observable<any>;
  constructor(public store: EditorStore) {}

  ngOnInit(): void {
    this.formComponent$ = this.store
      .selectDifferent((state) => !!state.selected.size)
      .pipe(
        map((hasSelected) => {
          if (hasSelected) {
          } else {
            return CanvasFormsComponent;
          }
        })
      );
  }
}
