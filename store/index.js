const defaultState = {
  device: {},
}

export const state = () => ({
  ...defaultState,
})

export const mutations = {
  setDevice(state, payload) {
    state.device = payload
  },
}
