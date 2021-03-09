import { Injector, NgModule } from '@angular/core';
import { IconDefinition } from '@ant-design/icons-angular';
import * as AllIcons from '@ant-design/icons-angular/icons';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule, NzIconService } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzPipesModule } from 'ng-zorro-antd/pipes';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzTreeModule } from 'ng-zorro-antd/tree';

const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
const ICONS: IconDefinition[] = Object.keys(antDesignIcons).map((key) => antDesignIcons[key]);

const NG_ZORRO_MODULES = [
  NzButtonModule,
  NzCardModule,
  NzCollapseModule,
  NzDividerModule,
  NzDropDownModule,
  NzFormModule,
  NzIconModule,
  NzInputModule,
  NzInputNumberModule,
  NzPipesModule,
  NzSelectModule,
  NzSwitchModule,
  NzTabsModule,
  NzTagModule,
  NzToolTipModule,
  NzTreeModule,
];

@NgModule({
  imports: [...NG_ZORRO_MODULES, NzIconModule.forRoot(ICONS)],
  exports: [...NG_ZORRO_MODULES, NzIconModule],
})
export class NgZorroModule {
  constructor(private injector: Injector) {
    this.injector.get(NzIconService).fetchFromIconfont({ scriptUrl: 'https://at.alicdn.com/t/font_1310204_lmnttxhl5lk.js' });
  }
}
