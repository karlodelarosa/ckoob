/* eslint-disable @typescript-eslint/no-unsafe-call */
const state = () => ({
    isOpen: false
})

const actions = {
    openModal({ commit }: any) {
        commit('SET_SUCCESS_MODAL_STATUS', true)
    },
    closeModal({ commit }: any) {
        commit('SET_SUCCESS_MODAL_STATUS', false)
    }
}

const mutations = {
    SET_SUCCESS_MODAL_STATUS(state: { isOpen: boolean; }, payload: boolean) {
        state.isOpen = payload
    }
}

const getters = {
    GET_success_modal_status: (state: { isOpen: boolean; }) => state.isOpen,
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}