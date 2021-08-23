// factory
export default function ($axios) {
  const version = '/api/v1'
  const routes = {
    LINE_AUTH: `${version}/auth/line`,
    USER_DETAILS: `${version}/user_details`,
    USERS_SIGN_OUT: `${version}/users/sign_out`,
    USERS_UID: `${version}/users`
  }

  const user = new User($axios, routes)
  return user
}

// repository
class User {
  constructor(userAxios, routes) {
    this.axios = userAxios
    this.routes = routes
  }

  // 多分いらない
  getAuthentication() {
    const url = `https://${process.env.RAILS_DOMAIN}`
    const redirectUrl = `https://${process.env.RAILS_DOMAIN}/omniauth/line/callback`
    const lineLoginURL = `${url}?auth_origin_url=${encodeURI(redirectUrl)}`
    return lineLoginURL
  }

  async postUserRegistory(userDetails) {
    await this.axios
      .$post(this.routes.USER_DETAILS, userDetails)
      .then(() => {
        // eslint-disable-next-line no-console
        console.log('success')
      })
      .catch(err => {
        // eslint-disable-next-line no-console
        console.log(`error ${err}`)
      })
  }

  async getUserInfomation(userId) {
    return await this.axios.$get(this.routes.USER_DETAILS, {
      params: {
        id: userId
      }
    })
  }

  async updateUserDetails(userId) {
    return await this.axios.$get(this.routes.USER_DETAILS, userId)
  }

  async signOut() {
    await this.axios.$get(this.routes.USERS_SIGN_OUT)
  }
}
