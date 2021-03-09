import { NgModule } from '@angular/core';
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
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/icon";
const antDesignIcons = AllIcons;
const ICONS = Object.keys(antDesignIcons).map((key) => antDesignIcons[key]);
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
export class NgZorroModule {
    constructor(injector) {
        this.injector = injector;
        this.injector.get(NzIconService).fetchFromIconfont({ scriptUrl: 'https://at.alicdn.com/t/font_1310204_lmnttxhl5lk.js' });
    }
}
NgZorroModule.ɵmod = i0.ɵɵdefineNgModule({ type: NgZorroModule });
NgZorroModule.ɵinj = i0.ɵɵdefineInjector({ factory: function NgZorroModule_Factory(t) { return new (t || NgZorroModule)(i0.ɵɵinject(i0.Injector)); }, imports: [[...NG_ZORRO_MODULES, NzIconModule.forRoot(ICONS)], NzButtonModule,
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
        NzTreeModule, NzIconModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NgZorroModule, { imports: [NzButtonModule,
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
        NzTreeModule, i1.NzIconModule], exports: [NzButtonModule,
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
        NzTreeModule, NzIconModule] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NgZorroModule, [{
        type: NgModule,
        args: [{
                imports: [...NG_ZORRO_MODULES, NzIconModule.forRoot(ICONS)],
                exports: [...NG_ZORRO_MODULES, NzIconModule],
            }]
    }], function () { return [{ type: i0.Injector }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctem9ycm8ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLy4uL3Byb2plY3RzL2FuZ3VsYXItZWRpdG9yLWxpYi9zcmMvIiwic291cmNlcyI6WyJsaWIvbmctem9ycm8ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBWSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFbkQsT0FBTyxLQUFLLFFBQVEsTUFBTSxpQ0FBaUMsQ0FBQztBQUM1RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDdEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzFELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUMxRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbEQsT0FBTyxFQUFFLFlBQVksRUFBRSxhQUFhLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNqRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDcEQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDakUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDdEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNoRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDeEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDOzs7QUFFbEQsTUFBTSxjQUFjLEdBQUcsUUFFdEIsQ0FBQztBQUNGLE1BQU0sS0FBSyxHQUFxQixNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFFOUYsTUFBTSxnQkFBZ0IsR0FBRztJQUN2QixjQUFjO0lBQ2QsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsY0FBYztJQUNkLGNBQWM7SUFDZCxZQUFZO0lBQ1osV0FBVztJQUNYLGVBQWU7SUFDZixZQUFZO0NBQ2IsQ0FBQztBQU1GLE1BQU0sT0FBTyxhQUFhO0lBQ3hCLFlBQW9CLFFBQWtCO1FBQWxCLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDcEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUMsaUJBQWlCLENBQUMsRUFBRSxTQUFTLEVBQUUscURBQXFELEVBQUUsQ0FBQyxDQUFDO0lBQzNILENBQUM7O2lEQUhVLGFBQWE7eUdBQWIsYUFBYSwwQ0FIZixDQUFDLEdBQUcsZ0JBQWdCLEVBQUUsWUFBWSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQW5CM0QsY0FBYztRQUNkLFlBQVk7UUFDWixnQkFBZ0I7UUFDaEIsZUFBZTtRQUNmLGdCQUFnQjtRQUNoQixZQUFZO1FBQ1osWUFBWTtRQUNaLGFBQWE7UUFDYixtQkFBbUI7UUFDbkIsYUFBYTtRQUNiLGNBQWM7UUFDZCxjQUFjO1FBQ2QsWUFBWTtRQUNaLFdBQVc7UUFDWCxlQUFlO1FBQ2YsWUFBWSxFQUttQixZQUFZO3dGQUVoQyxhQUFhLGNBdEJ4QixjQUFjO1FBQ2QsWUFBWTtRQUNaLGdCQUFnQjtRQUNoQixlQUFlO1FBQ2YsZ0JBQWdCO1FBQ2hCLFlBQVk7UUFDWixZQUFZO1FBQ1osYUFBYTtRQUNiLG1CQUFtQjtRQUNuQixhQUFhO1FBQ2IsY0FBYztRQUNkLGNBQWM7UUFDZCxZQUFZO1FBQ1osV0FBVztRQUNYLGVBQWU7UUFDZixZQUFZLDhCQWZaLGNBQWM7UUFDZCxZQUFZO1FBQ1osZ0JBQWdCO1FBQ2hCLGVBQWU7UUFDZixnQkFBZ0I7UUFDaEIsWUFBWTtRQUNaLFlBQVk7UUFDWixhQUFhO1FBQ2IsbUJBQW1CO1FBQ25CLGFBQWE7UUFDYixjQUFjO1FBQ2QsY0FBYztRQUNkLFlBQVk7UUFDWixXQUFXO1FBQ1gsZUFBZTtRQUNmLFlBQVksRUFLbUIsWUFBWTtrREFFaEMsYUFBYTtjQUp6QixRQUFRO2VBQUM7Z0JBQ1IsT0FBTyxFQUFFLENBQUMsR0FBRyxnQkFBZ0IsRUFBRSxZQUFZLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUMzRCxPQUFPLEVBQUUsQ0FBQyxHQUFHLGdCQUFnQixFQUFFLFlBQVksQ0FBQzthQUM3QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdG9yLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSWNvbkRlZmluaXRpb24gfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucy1hbmd1bGFyJztcbmltcG9ydCAqIGFzIEFsbEljb25zIGZyb20gJ0BhbnQtZGVzaWduL2ljb25zLWFuZ3VsYXIvaWNvbnMnO1xuaW1wb3J0IHsgTnpCdXR0b25Nb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2J1dHRvbic7XG5pbXBvcnQgeyBOekNhcmRNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NhcmQnO1xuaW1wb3J0IHsgTnpDb2xsYXBzZU1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29sbGFwc2UnO1xuaW1wb3J0IHsgTnpEaXZpZGVyTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9kaXZpZGVyJztcbmltcG9ydCB7IE56RHJvcERvd25Nb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2Ryb3Bkb3duJztcbmltcG9ydCB7IE56Rm9ybU1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvZm9ybSc7XG5pbXBvcnQgeyBOekljb25Nb2R1bGUsIE56SWNvblNlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2ljb24nO1xuaW1wb3J0IHsgTnpJbnB1dE1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaW5wdXQnO1xuaW1wb3J0IHsgTnpJbnB1dE51bWJlck1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaW5wdXQtbnVtYmVyJztcbmltcG9ydCB7IE56UGlwZXNNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL3BpcGVzJztcbmltcG9ydCB7IE56U2VsZWN0TW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9zZWxlY3QnO1xuaW1wb3J0IHsgTnpTd2l0Y2hNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL3N3aXRjaCc7XG5pbXBvcnQgeyBOelRhYnNNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL3RhYnMnO1xuaW1wb3J0IHsgTnpUYWdNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL3RhZyc7XG5pbXBvcnQgeyBOelRvb2xUaXBNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL3Rvb2x0aXAnO1xuaW1wb3J0IHsgTnpUcmVlTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC90cmVlJztcblxuY29uc3QgYW50RGVzaWduSWNvbnMgPSBBbGxJY29ucyBhcyB7XG4gIFtrZXk6IHN0cmluZ106IEljb25EZWZpbml0aW9uO1xufTtcbmNvbnN0IElDT05TOiBJY29uRGVmaW5pdGlvbltdID0gT2JqZWN0LmtleXMoYW50RGVzaWduSWNvbnMpLm1hcCgoa2V5KSA9PiBhbnREZXNpZ25JY29uc1trZXldKTtcblxuY29uc3QgTkdfWk9SUk9fTU9EVUxFUyA9IFtcbiAgTnpCdXR0b25Nb2R1bGUsXG4gIE56Q2FyZE1vZHVsZSxcbiAgTnpDb2xsYXBzZU1vZHVsZSxcbiAgTnpEaXZpZGVyTW9kdWxlLFxuICBOekRyb3BEb3duTW9kdWxlLFxuICBOekZvcm1Nb2R1bGUsXG4gIE56SWNvbk1vZHVsZSxcbiAgTnpJbnB1dE1vZHVsZSxcbiAgTnpJbnB1dE51bWJlck1vZHVsZSxcbiAgTnpQaXBlc01vZHVsZSxcbiAgTnpTZWxlY3RNb2R1bGUsXG4gIE56U3dpdGNoTW9kdWxlLFxuICBOelRhYnNNb2R1bGUsXG4gIE56VGFnTW9kdWxlLFxuICBOelRvb2xUaXBNb2R1bGUsXG4gIE56VHJlZU1vZHVsZSxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFsuLi5OR19aT1JST19NT0RVTEVTLCBOekljb25Nb2R1bGUuZm9yUm9vdChJQ09OUyldLFxuICBleHBvcnRzOiBbLi4uTkdfWk9SUk9fTU9EVUxFUywgTnpJY29uTW9kdWxlXSxcbn0pXG5leHBvcnQgY2xhc3MgTmdab3Jyb01vZHVsZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yKSB7XG4gICAgdGhpcy5pbmplY3Rvci5nZXQoTnpJY29uU2VydmljZSkuZmV0Y2hGcm9tSWNvbmZvbnQoeyBzY3JpcHRVcmw6ICdodHRwczovL2F0LmFsaWNkbi5jb20vdC9mb250XzEzMTAyMDRfbG1udHR4aGw1bGsuanMnIH0pO1xuICB9XG59XG4iXX0=