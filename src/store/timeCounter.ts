import { Module } from "vuex";

interface ICounterState {
  fromTime: number;
}

const ADD_TIME = "ADD_TIME";
const MIN_TIME = "MIN_TIME";

const timeCounter: Module<ICounterState, {}> = {
  namespaced: true,

  state: {
    fromTime: 10
  },

  mutations: {
    [ADD_TIME](state, payload: number) {
      state.fromTime += payload;
    },
    [MIN_TIME](state, payload: number) {
      state.fromTime -= state.fromTime > 0 ? payload : 0;
    }
  }
};

export { timeCounter, ICounterState };
