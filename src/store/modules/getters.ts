import { GetterTree } from 'vuex'
import { State } from './state'

export interface Getters {
  moviesCount(state: State): number;
}

export const getters: GetterTree<State, State> & Getters = {
    moviesCount(state: State): number {
    return state.movies.length
  }
}
