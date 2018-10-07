s3.createMultipartUpload({
  Bucket: 'better-than-youtube',
  Key: filename,
}, (err, data) => {
  const uploadId = data.UploadId;
  let partNumber = 0;
  let ended = false;
  let cancelled = false;
  const parts = [];
  let chunkSoFar = '';
  function maybeCompleteUpload() {
    if (ended && parts.all(p => p.ETag)) {
      s3.completeMultipartUpload({
          Bucket: 'better-than-youtube',
          Key: filename,
          MultipartUpload: {
            Parts: parts,
          },
          UploadId: uploadId,
        }, (err, data) => {
          if (err) {
            cancelUpload();
          }
      });
    }
  }

  function cancelUpload() {
    cancelled = true;
    s3.abortMultipartUpload({
      Bucket: 'better-than-youtube',
      Key: filename,
      UploadId: uploadId,
    }, (err, data) => {
      if (err) {
        console.log(err, err.stack);
      } else {
        console.log(data);
      }
    });
  }

  function appendPart(payload, partNumber) {
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
    parts.append(part);
    s3.uploadPart({
      Body: payload,
      Bucket: 'better-than-youtube',
      Key: filename,
      PartNumber: part.partNumber,
      UploadId: uploadId,
    }, (err, data) => {
      if (err) {
        cancelUpload();
      }
      // 'part' is already in the array
      // but we have a reference to it, so we can
      // update with the ETag now that we know it.
      part.ETag = data.ETag;
      maybeCompleteUpload();
    });
  }

  req.on('data', (chunk) => {
    chunkSoFar += chunk;
    if (
        chunkSoFar.length > FIVE_MB_IN_BYTES &&
        !cancelled
    ) {
      appendPart(chunkSoFar, partNumber);
      chunkSoFar = '';
      partNumber++;
    }
  });
  req.on('end', () => {
    ended = true;
    if (chunkSoFar.length > 0) {
      appendPart(chunkSoFar, partNumber);
    }
    maybeCompleteUpload();
  });
});