import {ActionCreator as ReduxActionCreator} from 'redux';
import {FluxStandardAction} from 'flux-standard-action';

type Payload = Promise<any> | any;
type Meta = any;

export interface Action extends FluxStandardAction<Payload, Meta> {
  warning?: any;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ActionCreator extends ReduxActionCreator<Action> {}
