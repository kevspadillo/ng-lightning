import {Component, Input, ChangeDetectionStrategy, HostBinding} from 'angular2/core';
import {toBoolean} from '../util/util';

@Component({
  selector: 'ngl-spinner',
  templateUrl: './spinner.jade',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NglSpinner {
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() type: 'brand' |  'inverse';

  private _container = false;
  @HostBinding('class.slds-spinner_container') get hasContainer() {
    return this._container;
  }
  @Input() set container(container: string | boolean) {
    this._container = toBoolean(container);
  }
};
