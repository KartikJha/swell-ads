import express from "express";
import awsWorker from "../workers/AwsWorker";

const router = express.Router();

router.put("/files", function(req: express.Request, res: express., next) {
  console.log("route");
  awsWorker.putObjectInS3();
});

export default router;
