s3.createMultipartUpload({
  Bucket: 'better-than-youtube',
  Key: filename,
}, (err, data) => {
  const uploadId = data.UploadId;
  let partNumber = 0;
  let parts = [];
  req.on('data', (chunk) => {
    s3.uploadPart({
      Body: chunk,
      Bucket: 'better-than-youtube',
      Key: filename,
      PartNumber: partNumber,
      UploadId: uploadId,
    }, (err, data) => {
      if (err) {
        // todo, handle errors by
        // calling abortMultipartUpload
      }
      parts.append({
        PartNumber: partNumber,
        ETag: data.ETag,
      });
    });
    partNumber++;
  });
  req.on('end', () => {
    s3.completeMultipartUpload({
      Bucket: 'better-than-youtube',
      Key: filename,
      MultipartUpload: {
        Parts: parts,
      },
      UploadId: uploadId,
    }, (err, data) => {
      // finally it's ended...
    });
  });
});