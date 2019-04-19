import AWS from "aws-sdk";

export default new class {
  putObjectInS3(bucketName: String, req) {
    var file = req.files.file;
    var s3bucket = new AWS.S3({ params: { Bucket: process.env.BUCKET_NAME } });
    console.log(process.env.BUCKET_NAME);
    s3bucket.createBucket(function() {
      var params = {
        Key: file.name,
        Body: file
      };
      s3bucket.upload(params, function(err, data) {
        console.log("PRINT FILE:", file);
        if (err) {
          console.log("ERROR MSG: ", err);
        } else {
          console.log("Successfully uploaded data");
        }
      });
    });
  }
}();
