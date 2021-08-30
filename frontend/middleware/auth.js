export default async function ({ app, redirect, route }) {
  if (route.path === '/' || route.path === '/omniauth/line/callback') return
  const session = await app.$cookies.get('session')
  if (!session) return redirect('/')

  const isHelper = localStorage.getItem('is_helper')
  if (/^hitokoe-?/.test(route.name) && isHelper === 'true') {
    redirect('/helper')
  } else if (/^helper-?/.test(route.name) && isHelper === 'false') {
    redirect('/hitokoe')
  }
}
