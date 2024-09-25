import { type StoreApi, type UseBoundStore, useStore } from 'zustand'

export interface ZustandFuncSelectors<StateType> {
  use: {
    [key in keyof StateType]: () => StateType[key]
  }
}

export function createSelectorFunctions<StateType extends object>(
  store: UseBoundStore<StoreApi<StateType>> | StoreApi<StateType>,
): UseBoundStore<StoreApi<StateType>> & ZustandFuncSelectors<StateType> {
  const storeIn: UseBoundStore<StoreApi<StateType>> | StoreApi<StateType> =
    store

  const use: ZustandFuncSelectors<StateType>['use'] =
    {} as ZustandFuncSelectors<StateType>['use']

  Object.keys(storeIn.getState()).forEach((key: string) => {
    const selector = (state: StateType) => state[key as keyof StateType]
    use[key as keyof StateType] =
      typeof storeIn === 'function'
        ? () => (storeIn as UseBoundStore<StoreApi<StateType>>)(selector)
        : () =>
            useStore(storeIn as UseBoundStore<StoreApi<StateType>>, selector)
  })

  return Object.assign(store, { use }) as UseBoundStore<StoreApi<StateType>> &
    ZustandFuncSelectors<StateType>
}
