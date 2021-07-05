import { GetterTree } from 'vuex'
import { State, MovieInterface } from './state'

export interface Getters {
  moviesCount(state: State): number;
  moviesList(state: State): MovieInterface[];
}

export const getters: GetterTree<State, State> & Getters = {
    moviesCount(state: State): number {
        return state.movies.length
  },
    moviesList(state: State): MovieInterface[] {
        return state.movies
  }
}
