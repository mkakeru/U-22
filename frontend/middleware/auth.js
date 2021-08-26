export default async function ({ app, redirect, route }) {
  if (route.path === '/' || route.path === '/omniauth/line/callback') return
  const session = await app.$cookies.get('session')
  if (!session) return redirect(302, '/')
}
