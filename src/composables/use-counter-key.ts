import { InjectionKey } from '@vue/composition-api';
import { CounterStore } from './use-counter';

const CounterKey: InjectionKey<CounterStore> = Symbol('CounterStore');
export default CounterKey;