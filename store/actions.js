export const switchOption = ({ commit, state }, store) => {
  commit('SWITCH_OPTION', store)
}

export const newFile = ({ commit, state }, payload) => {
  commit('NEW_FILE', payload)
}
