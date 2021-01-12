import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { updateCanvasBackground, updateCanvasPosition, updateCanvasSize } from '../../../../actions';
import { EditorStore } from '../../../../services/store.service';

@Component({
  selector: 'ce-canvas-forms,[ceCanvasForms]',
  templateUrl: './canvas-forms.component.html',
  styleUrls: ['./canvas-forms.component.less'],
  encapsulation: ViewEncapsulation.None,
})
export class CanvasFormsComponent implements OnInit, OnDestroy {
  public canvasSizeFormGroup: FormGroup;
  public canvasPositionFormGroup: FormGroup;
  public canvasBackgroundFormGroup: FormGroup;
  private subscription = new Subscription();
  constructor(public fb: FormBuilder, public store: EditorStore) {
    this.canvasSizeFormGroup = this.fb.group({
      width: [0, [Validators.required, Validators.min(0)]],
      height: [0, [Validators.required, Validators.min(0)]],
    });
    this.canvasPositionFormGroup = this.fb.group({
      left: [0, [Validators.required]],
      top: [0, [Validators.required]],
      scale: [1, [Validators.min(0.01), Validators.required]],
    });
    this.canvasBackgroundFormGroup = this.fb.group({
      backgroundColor: ['#ffffff'],
      backgroundImage: [null],
    });
    this.subscription.add(
      this.store
        .selectDifferent((state) => state.canvasSize)
        .subscribe((state) => {
          this.canvasSizeFormGroup.patchValue(state, { emitEvent: false });
        })
    );
    this.subscription.add(
      this.store
        .selectDifferent((state) => state.canvasPosition)
        .subscribe((state) => {
          this.canvasPositionFormGroup.patchValue(
            { left: Math.round(state.left), top: Math.round(state.top), scale: state.scale?.toFixed(2) },
            { emitEvent: false }
          );
        })
    );
    this.subscription.add(
      this.store
        .selectDifferent((state) => state.canvasBackground)
        .subscribe((state) => {
          this.canvasBackgroundFormGroup.patchValue(state, { emitEvent: false });
        })
    );
  }

  ngOnInit(): void {
    this.canvasSizeFormGroup.valueChanges.subscribe((value) => {
      this.store.dispatch(updateCanvasSize(value));
    });
    this.canvasPositionFormGroup.valueChanges.subscribe((value) => {
      this.store.dispatch(updateCanvasPosition(value));
    });
    this.canvasBackgroundFormGroup.valueChanges.subscribe((value) => {
      console.log(value);
      this.store.dispatch(updateCanvasBackground(value));
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
