import { createStore } from 'vuex'

export default createStore({
    // порядок следующий!!! state-getters-mutations-actions
    state () {
        count: 0
    },
    getters: { // не умеют работать с данными других модулей
        getCountX2: (state: any) => state.count * 2 // первый аргумент всегда state текущего модуля
    },
    mutations: {
        increment (state: any, payload: number = 1) {
            state.count += payload
        }
    },
    actions: {
        runIncrement: (store: any, payload: any = 1) => {
            store.commit('increment', payload) // выполняет мутацию по ее названию
            store.commit('increment') // отрабатывает мутация
            store.commit('increment') // отрабатывает мутация
            store.commit('increment') // отрабатывает мутация
            store.commit('increment') // отрабатывает мутация
            store.dispatch('', 0, { root: true }) // root - обращаемся к корневому
        }
    }
})