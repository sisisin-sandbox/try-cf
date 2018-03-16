import cloudform, { S3, Fn } from 'cloudform'

export const json = cloudform({
  Description: 'My template',
  Parameters: {},
  Mappings: {},
  Resources: {
    S3: new S3.Bucket({
      BucketName: 'simenyan'
    })
  },
  Outputs: {
    a: {
      Value: Fn.GetAtt('S3', 'Arn')
    }
  }
});
