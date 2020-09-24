import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'ce-widget-list',
  templateUrl: './widget-list.component.html',
  styleUrls: ['./widget-list.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WidgetListComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
