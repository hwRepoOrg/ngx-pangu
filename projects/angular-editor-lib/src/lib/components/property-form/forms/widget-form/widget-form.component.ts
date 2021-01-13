import { Component, ComponentFactoryResolver, OnInit, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { updateNodes } from '../../../../actions/nodes.actions';
import { filter, map, switchMap } from 'rxjs/operators';
import { EditorStore } from '../../../../services/store.service';

@Component({
  selector: 'ce-widget-form,[ceWidgetForm]',
  templateUrl: './widget-form.component.html',
  styleUrls: ['./widget-form.component.less'],
  encapsulation: ViewEncapsulation.None,
})
export class WidgetFormComponent implements OnInit {
  @ViewChild('container')
  propsFormContainer: TemplateRef<any>;
  boundingFormGroup: FormGroup;
  constructor(private fb: FormBuilder, private cfr: ComponentFactoryResolver, private store: EditorStore) {
    this.boundingFormGroup = this.fb.group({
      id: [, [Validators.required]],
      name: [],
      width: [, [Validators.required]],
      height: [, [Validators.required]],
      left: [, [Validators.required]],
      top: [, [Validators.required]],
      locked: [],
      rotate: [, [Validators.required]],
      zIndex: [, [Validators.required]],
      borderStyle: [],
      borderWidth: [],
      borderColor: [],
      borderRadius: [],
      backgroundColor: [],
      backgroundImage: [],
      backgroundRepeat: [],
      backgroundPosition: [],
      backgroundSize: [],
    });
  }

  ngOnInit(): void {
    this.store
      .select((state) => state.selected)
      .pipe(
        filter((selected) => selected.size === 1),
        map((selected) => [...selected][0]),
        switchMap((id) => this.store.select((state) => state.nodes.find((item) => item.id === id))),
        filter((node) => !!node)
      )
      .subscribe((node) => {
        this.boundingFormGroup.patchValue(
          {
            ...node,
            width: Math.round(node.width),
            height: Math.round(node.height),
            left: Math.round(node.left),
            top: Math.round(node.top),
          },
          { emitEvent: false }
        );
      });
    this.boundingFormGroup.valueChanges.subscribe((values) => {
      this.store.dispatch(updateNodes([values]));
    });
  }
}
