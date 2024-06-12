import express from "express";
import {
  getDonors,
  getDonor,
  addDonor,
  deleteDonors,
  updateDonors,
  donorLogin,
} from "../controllers/donor_controller.js";

const router = express.Router();

router.get("/gets", getDonors);
router.get("/get/:id", getDonor);
router.post("/add", addDonor);
router.delete("/delete/:id", deleteDonors);
router.put("/update/:id", updateDonors);
router.post("/login", donorLogin);

export default router;
