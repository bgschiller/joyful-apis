s3.createMultipartUpload({
  Bucket: 'better-than-youtube',
  Key: filename,
}, (err, data) => {
  const uploadId = data.UploadId;
  let partNumber = 0;
  let parts = [];
  req.on('data', (chunk) => {
    // save this off, as it might have changed before
    // the response from the upload
    const part = {
      PartNumber: partNumber,
      ETag: null, // not yet known
    };
    // we must append now, as there's no guarantee
    // the uploadPart responses will arrive in order.
    // we'll keep a reference to 'part' to fill in the
    // ETag later.
    s3.uploadPart({
      Body: chunk,
      Bucket: 'better-than-youtube',
      Key: filename,
      PartNumber: fixedPartNum,
      UploadId: uploadId,
    }, (err, data) => {
      if (err) {
        // todo, handle errors by
        // calling abortMultipartUpload
      }
      // 'part' is already in the array
      // but we have a reference to it, so we can
      // update with the ETag now that we know it.
      part.ETag = data.ETag;
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