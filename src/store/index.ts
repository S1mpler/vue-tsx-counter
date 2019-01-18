import Vue from "vue";
import Vuex from "vuex";
import { timeCounter, ICounterState } from "./timeCounter";

Vue.use(Vuex);

interface IState {
  timeCounter: ICounterState;
}

const store = new Vuex.Store<IState>({
  modules: {
    timeCounter
  }
});

export { store, IState };
