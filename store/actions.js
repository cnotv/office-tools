export const switchOption = ({ commit, state }, store) => {
  commit('SWITCH_OPTION', store)
}

export const newFile = ({ commit, state }, payload) => {
  commit('NEW_FILE', payload)
}
export const updateFile = ({ commit, state }, payload) => {
  commit('UPDATE_FILE', payload)
}
export const deleteFile = ({ commit, state }, payload) => {
  commit('REMOVE_FILE', payload)
}

export const updateSettings = ({ commit, state }, payload) => {
  commit('UPDATE_SETTINGS', payload)
}
