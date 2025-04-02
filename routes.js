import { Router } from "express";

const router = Router();

router.get("/", (req, res, next) => {
  res.send({ msg: "Hello World!" });
  next();
});

export default router;
