// eslint-disable-next-line no-useless-return
export default async function ({ query, store, $user, app, route }) {
  if (!query['access-token']) return
  const session = {}
  const authHeaders = {
    'access-token': query['access-token'],
    client: query.client,
    uid: query.uid
  }
  store.commit('authLine/setAuth', authHeaders)
  session.tokens = authHeaders

  await app.$cookies.set('session', session, {
    path: '/',
    maxAge: 60 * 60 * 24 * 7
  })
}
