import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { EditorStore } from '../../services';
import { CanvasFormsComponent } from './forms/canvas-forms/canvas-forms.component';
import { WidgetFormComponent } from './forms/widget-form/widget-form.component';

@Component({
  selector: 'property-form',
  templateUrl: './property-form.component.html',
  styleUrls: ['./property-form.component.less'],
  encapsulation: ViewEncapsulation.None,
})
export class PropertyFormComponent implements OnInit {
  formComponent$: Observable<any>;
  @ViewChild('instance')
  instance: any;
  constructor(public store: EditorStore) {}

  ngOnInit(): void {
    this.formComponent$ = this.store
      .selectDifferent((state) => !!state.selected.size)
      .pipe(map((hasSelected) => (hasSelected ? WidgetFormComponent : CanvasFormsComponent)));
  }
}
