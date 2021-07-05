import { MutationTree } from 'vuex'
import { State, MovieItem } from './state'

export enum MutationType {
    CreateMovie = 'CREATE_MOVIE',
    SetLoading = 'SET_LOADING'
}

export type Mutations = {
    [MutationType.CreateMovie](state: State, movie: MovieItem): void
    [MutationType.SetLoading](state: State, value: boolean): void
}

export const mutations: MutationTree<State> & Mutations = {
    [MutationType.CreateMovie](state, movie) {
        state.movies.unshift(movie)
    },
    [MutationType.SetLoading](state, value) {
        state.loading = value
    }
}