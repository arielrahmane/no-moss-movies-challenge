import { ActionContext, ActionTree } from 'vuex'
import { Mutations, MutationType } from './mutations'
import { State } from './state'

export enum ActionTypes {
  GetMovies = 'GET_MOVIES'
}

type ActionAugments = Omit<ActionContext<State, State>, 'commit'> & {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>
}

export interface Actions {
  [ActionTypes.GetMovies](context: ActionAugments): void
}

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

export const actions: ActionTree<State, State> & Actions = {
  async [ActionTypes.GetMovies]({ commit }) {
    commit(MutationType.SetLoading, true)

    await sleep(1000)

    commit(MutationType.SetLoading, false)
    commit(MutationType.CreateMovie, {
        Id: 123456,
        Name: "My New Movie"
      }
    )
  }
}