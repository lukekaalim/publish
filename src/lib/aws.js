import aws from 'aws-sdk';

const uploadToBucket = (secret, id, region, bucket, key, data) => {
  const s3 = new aws.S3({
    accessKeyId: id,
    secretAccessKey: secret,
    region,
  });
  return new Promise((resolve, reject) => {
    s3.putObject({
      Body: data,
      Bucket: bucket,
      Key: key,
    }, (err, data) => {
      err ? reject(err) : resolve(data);
    });
  });
};

export {
  uploadToBucket,
};
