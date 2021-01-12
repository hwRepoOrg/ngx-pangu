import { Component, ComponentFactoryResolver, TemplateRef, ViewChild } from '@angular/core';

@Component({
  templateUrl: './widget-form.component.html',
})
export class WidgetFormComponent {
  @ViewChild('container')
  propsFormContainer: TemplateRef<any>;
  constructor(private cfr: ComponentFactoryResolver) {}
}
