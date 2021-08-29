export default async function ({ app, redirect, route }) {
  if (route.name === 'index') {
    const isHelper = localStorage.getItem('is_helper')
    if (isHelper !== null) {
      return isHelper === 'true' ? redirect('/helper') : redirect('/hitokoe')
    }
  }
  if (route.path === '/' || route.path === '/omniauth/line/callback') return
  const session = await app.$cookies.get('session')
  if (!session) return redirect(302, '/')
}
