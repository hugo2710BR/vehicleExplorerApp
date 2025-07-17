import { type StateCreator, create } from "zustand";
import { devtools } from "zustand/middleware";

export class StoreHelper {
  static createStore = <T>(
    innerStore: StateCreator<T, [["zustand/devtools", never]]>,
    storeName: string
  ) =>
    create<T>()(
      devtools((set, get, api) => innerStore(set, get, api), {
        enabled: true,
        name: storeName,
      })
    );
}
