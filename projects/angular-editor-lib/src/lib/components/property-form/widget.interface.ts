import { Observable } from 'rxjs';

export abstract class WidgetFormSchema<P = any> {
  public abstract propsChange: Observable<P>;
  public abstract setProps(props: P): void;
}
