export default function ({ $axios, redirect }) {
  $axios.onError((error) => {
    // eslint-disable-next-line no-console
    if (error.response.status === 500) console.error(error)
  })
}
