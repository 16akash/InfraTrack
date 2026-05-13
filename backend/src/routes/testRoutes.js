import express from "express";

import {
  protect,
  authorizeRoles,
} from "../middleware/authMiddleware.js";

const router = express.Router();


// Protected Route
router.get(
  "/profile",
  protect,

  (req, res) => {

    res.status(200).json({
      success: true,
      message:
        "Protected route accessed",

      user: req.user,
    });

  }
);




// ADMIN ONLY ROUTE
router.get(
  "/admin",

  protect,

  authorizeRoles("admin"),

  (req, res) => {

    res.status(200).json({
      success: true,
      message:
        "Welcome Admin",
    });

  }
);

export default router;