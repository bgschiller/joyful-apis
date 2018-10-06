await s3.putObject({
  Bucket: 'better-than-youtube',
  Key: filename,
  // forward the body of the request
  // straight to s3
  Body: req,
});
