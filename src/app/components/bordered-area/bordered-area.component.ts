import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { CeUtilsService } from 'src/app/services/utils.service';
import { ICanvasSize, INode, IStore } from 'src/app/store/store';

@Component({
  selector: 'ce-bordered-area',
  templateUrl: './bordered-area.component.html',
  styleUrls: ['./bordered-area.component.less'],
})
export class BorderedAreaComponent implements OnInit, OnDestroy {
  private nodes: INode<any>[];
  public borderedNodeMap = new Map<string, Partial<DOMRect & { rotate: number }>>();
  private subscription = new Subscription();
  private bordered: Set<string>;
  private canvasSize: ICanvasSize;
  public get nodeList(): ({ id: string } & Partial<DOMRect & { rotate: number }>)[] {
    return [...this.borderedNodeMap].map(([id, { width, height, left, top }]) => ({ id, width, height, left, top }));
  }

  constructor(private store: Store<IStore>, private utils: CeUtilsService) {}

  ngOnInit(): void {
    this.subscription.add(this.store.select('nodes').subscribe((nodes) => (this.nodes = nodes)));
    this.subscription.add(
      this.store
        .select(({ canvasSize }) => ({ canvasSize }))
        .pipe(
          map(({ canvasSize }) => (this.canvasSize = canvasSize)),
          filter(() => !!this.bordered)
        )
        .subscribe(() => this.refreshBorderedList(this.bordered))
    );
    this.subscription.add(
      this.store
        .select('bordered')
        .pipe(
          filter(() => !!this.nodes && !!this.canvasSize),
          map((bordered) => {
            this.bordered = bordered;
            console.log(bordered, this.bordered);
            if (bordered.size) {
              this.borderedNodeMap.forEach((...args) => {
                if (!bordered.has(args[1])) {
                  this.borderedNodeMap.delete(args[1]);
                }
              });
            } else {
              this.borderedNodeMap.clear();
            }
          })
        )
        .subscribe(() => this.refreshBorderedList(this.bordered))
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  getRotate(rotate: number): string {
    return `rotate(${rotate}deg)`;
  }

  trackByFn(...args: [number, { id: string } & Partial<DOMRect & { rotate: number }>]): string {
    return `${args[1].id}-${args[1].width}-${args[1].height}-${args[1].left}-${args[1].top}-${args[1].rotate}`;
  }

  refreshBorderedList(bordered: Set<string>): void {
    bordered.forEach((id) => {
      const node = this.utils.getNodeById(id, this.nodes);
      this.borderedNodeMap.set(id, {
        width: (node.width / this.canvasSize.width) * 100,
        height: (node.height / this.canvasSize.height) * 100,
        left: (node.left / this.canvasSize.width) * 100,
        top: (node.top / this.canvasSize.height) * 100,
        rotate: node.rotate,
      });
    });
  }
}
