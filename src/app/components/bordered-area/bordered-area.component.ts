import { Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject, Subscription } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';
import { CeUtilsService } from 'src/app/services/utils.service';
import { INode, IStore } from 'src/app/store/store';

@Component({
  selector: 'ce-bordered-area',
  templateUrl: './bordered-area.component.html',
  styleUrls: ['./bordered-area.component.less'],
})
export class BorderedAreaComponent implements OnInit, OnDestroy {
  private canvasChangeObserver: MutationObserver;
  private canvasChanged$ = new Subject();
  private nodes: INode<any>[];
  public borderedNodeMap = new Map<string, Partial<DOMRect & { rotate: number }>>();
  private subscription = new Subscription();
  private bordered: Set<string>;
  public get nodeList(): ({ id: string } & Partial<DOMRect & { rotate: number }>)[] {
    return [...this.borderedNodeMap].map(([id, { width, height, left, top }]) => ({ id, width, height, left, top }));
  }

  constructor(private store: Store<IStore>, private eleRef: ElementRef<HTMLDivElement>, private utils: CeUtilsService) {}

  ngOnInit(): void {
    this.canvasChangeObserver = new MutationObserver(() => this.canvasChanged$.next());
    this.canvasChangeObserver.observe(document.querySelector('[ceZoomArea]'), { attributes: true });
    this.subscription.add(this.store.select('nodes').subscribe((nodes) => (this.nodes = nodes)));
    this.subscription.add(
      this.store
        .select('canvasPosition')
        .pipe(
          filter(() => !!this.bordered),
          switchMap(() => this.canvasChanged$)
        )
        .subscribe(() => this.refreshBorderedList(this.bordered, false))
    );
    this.subscription.add(
      this.store
        .select('bordered')
        .pipe(
          filter(() => !!this.nodes),
          map((bordered) => {
            this.bordered = bordered;
            this.borderedNodeMap.forEach((...args) => {
              if (!bordered.has(args[1])) {
                this.borderedNodeMap.delete(args[1]);
              }
            });
          })
        )
        .subscribe(() => this.refreshBorderedList(this.bordered, true))
    );
  }

  ngOnDestroy(): void {
    this.canvasChangeObserver.disconnect();
    this.subscription.unsubscribe();
  }

  getRotate(rotate: number): string {
    return `rotate(${rotate}deg)`;
  }

  trackByFn(...args: [number, { id: string } & Partial<DOMRect & { rotate: number }>]): string {
    return `${args[1].id}-${args[1].width}-${args[1].height}-${args[1].left}-${args[1].top}-${args[1].rotate}`;
  }

  refreshBorderedList(bordered: Set<string>, cache: boolean): void {
    const boxRect = this.eleRef.nativeElement.getBoundingClientRect();
    bordered.forEach((id) => {
      if (!cache || (cache && !this.borderedNodeMap.has(id))) {
        const dom = document.querySelector(`#box-item-${id}`);
        const { left, width, height, top } = dom.getClientRects()[0];
        this.borderedNodeMap.set(id, {
          width,
          height,
          left: left - boxRect.left,
          top: top - boxRect.top,
          rotate: this.utils.getNodeById(id, this.nodes).rotate,
        });
      }
    });
  }
}
