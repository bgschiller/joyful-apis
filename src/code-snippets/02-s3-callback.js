app.post('/upload', async (req, res) => {
  const filename = uuid() + '.mp4';
  s3.putObject({
    Bucket: 'better-than-youtube',
    Key: filename,
    // forward the body of the request straight to s3
    Body: req,
  }, (err, data) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.json({ filename });
    }
  });
});
