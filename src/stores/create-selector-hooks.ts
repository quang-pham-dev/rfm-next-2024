import { StoreApi, UseBoundStore, useStore } from 'zustand'

export type ZustandHookSelectors<StateType> = {
  [Key in keyof StateType as `use${Capitalize<
    string & Key
  >}`]: () => StateType[Key]
}

const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1)

export function createSelectorsHooks<StateType extends object>(
  store: UseBoundStore<StoreApi<StateType>> | StoreApi<StateType>,
) {
  const storeIn: UseBoundStore<StoreApi<StateType>> | StoreApi<StateType> =
    store

  Object.keys(storeIn.getState()).forEach((key: string) => {
    const selector = (state: StateType) => state[key as keyof StateType]
    ;(storeIn as unknown as Record<string, unknown>)[`use${capitalize(key)}`] =
      typeof storeIn === 'function'
        ? () => (storeIn as UseBoundStore<StoreApi<StateType>>)(selector)
        : () =>
            useStore(storeIn as UseBoundStore<StoreApi<StateType>>, selector)
  })

  return storeIn as UseBoundStore<StoreApi<StateType>> &
    ZustandHookSelectors<StateType>
}
