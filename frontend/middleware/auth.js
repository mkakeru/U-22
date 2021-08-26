export default async function ({ app, redirect }) {
  const session = await app.$cookies.get('session')
  if (!session) return redirect('/')
}
