import { v4 as uuidv4 } from 'uuid'
import AWS from 'aws-sdk'

export default function (store) {
  const state = {
    region: process.env.BUCKET_REGION,
    identityPoolId: process.env.IDENTIFY_POOL_ID,
    bucketName: process.env.BUCKET_NAME
  }
  const handleS3 = new HandleS3(AWS, state, store)
  return handleS3
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
  }

  fileUpload(featurePhoto) {
    const fileExtension = featurePhoto.name.split('.').pop()
    const key = this.createKey(fileExtension)
    this.store.commit('user/setFeaturePhoto', {
      encodedData: featurePhoto,
      carrierWave: null
    })
    const params = {
      Bucket: process.env.BUCKET_NAME,
      Key: key,
      Body: featurePhoto,
      ContentType: 'image/jpeg',
      ACL: 'public-read-write'
    }

    this.s3.upload(params, (err, data) => {
      if (err) {
        // eslint-disable-next-line no-console
        console.error(err)
      } else {
        // eslint-disable-next-line no-console
        console.log(data)
      }
    })
  }

  createKey(fileExtension) {
    const key = `${uuidv4()}.${fileExtension}`
    return key
  }
}
