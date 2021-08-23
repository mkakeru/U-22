export default function ({ store, app }) {
  const session = app.$cookies.get('session')
  const auth = store.getters['authLine/auth']
  if (!auth['access-token'] && session)
    return store.commit('authLine/setAuth', session.tokens)
}
