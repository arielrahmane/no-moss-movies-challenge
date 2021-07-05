import { MutationTree } from 'vuex'
import { State, MovieInterface } from './state'

export enum MutationType {
    CreateMovie = 'CREATE_MOVIE',
    SetMovies = 'SET_MOVIES',
    SetLoading = 'SET_LOADING'
}

export type Mutations = {
    [MutationType.CreateMovie](state: State, movie: MovieInterface): void
    [MutationType.SetMovies](state: State, items: MovieInterface[]): void
    [MutationType.SetLoading](state: State, value: boolean): void
}

export const mutations: MutationTree<State> & Mutations = {
    [MutationType.CreateMovie](state, movie) {
        state.movies.unshift(movie)
    },
    [MutationType.SetMovies](state, movies) {
      state.movies = movies
    },
    [MutationType.SetLoading](state, value) {
        state.loading = value
    }
}