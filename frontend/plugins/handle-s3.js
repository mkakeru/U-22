import { v4 as uuidv4 } from 'uuid'
import AWS from 'aws-sdk'

export default function (context, inject) {
  const { store } = context
  const state = {
    region: process.env.BUCKET_REGION,
    identityPoolId: process.env.IDENTIFY_POOL_ID,
    bucketName: process.env.BUCKET_NAME
  }
  const handleS3 = () => new HandleS3(AWS, state, store)
  inject('handleS3', handleS3)
}

class HandleS3 {
  constructor(AWS, state, store) {
    AWS.config.update({
      region: state.region,
      credentials: new AWS.CognitoIdentityCredentials({
        IdentityPoolId: state.identityPoolId
      })
    })
    this.s3 = new AWS.S3({
      apiVersion: '2006-03-01',
      params: { Bucket: state.bucketName }
    })
    this.store = store
  }

  fileUpload() {
    const featureFile = this.store.getters['user/featureFile']
    const fileExtension = featureFile.name.split('.').pop()
    const key = this.createKey(fileExtension)
    this.store.commit('user/setFeatureKey', {
      featuerKey: key
    })

    const params = {
      Bucket: process.env.BUCKET_NAME,
      Key: key,
      Body: featureFile,
      ContentType: 'image/jpeg',
      ACL: 'public-read'
    }

    this.s3.upload(params, (err, data) => {
      if (err) {
        console.error(err)
      } else {
        // eslint-disable-next-line no-restricted-syntax
        console.log(data)
      }
    })
  }

  createKey(fileExtension) {
    const key = `${uuidv4()}.${fileExtension}`
    return key
  }
}
