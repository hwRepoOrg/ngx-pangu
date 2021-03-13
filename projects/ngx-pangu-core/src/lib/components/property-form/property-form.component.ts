import { ChangeDetectionStrategy, Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { EditorStore } from '../../services';
import { CanvasFormsComponent } from './forms/canvas-forms/canvas-forms.component';
import { WidgetFormComponent } from './forms/widget-form/widget-form.component';

@Component({
  selector: 'ce-property-form,[cePropertyForm]',
  templateUrl: './property-form.component.html',
  styleUrls: ['./property-form.component.less'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PropertyFormComponent implements OnInit {
  formComponent$: Observable<any>;
  @ViewChild('instance')
  instance: any;
  constructor(public store: EditorStore) {}

  ngOnInit(): void {
    this.formComponent$ = this.store
      .select((state) => state.selected.size)
      .pipe(map((size) => (size === 1 ? WidgetFormComponent : CanvasFormsComponent)));
  }
}
