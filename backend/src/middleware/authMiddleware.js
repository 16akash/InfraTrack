import jwt from "jsonwebtoken";
import User from "../models/User.js";


// PROTECT ROUTES
export const protect = async (
  req,
  res,
  next
) => {

  let token;

  try {

    // Check token exists
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith(
        "Bearer"
      )
    ) {

      // Get token
      token =
        req.headers.authorization.split(
          " "
        )[1];

      // Verify token
      const decoded = jwt.verify(
        token,
        process.env.JWT_SECRET
      );

      // Get user from DB
      req.user = await User.findById(
        decoded.id
      ).select("-password");

      next();

    } else {

      return res.status(401).json({
        message:
          "Not authorized, token missing",
      });

    }

  } catch (error) {

    return res.status(401).json({
      message:
        "Not authorized, token failed",
    });

  }
};




// ROLE AUTHORIZATION
export const authorizeRoles =
  (...roles) => {

    return (
      req,
      res,
      next
    ) => {

      if (
        !roles.includes(
          req.user.role
        )
      ) {

        return res.status(403).json({
          message:
            `Role (${req.user.role}) is not allowed to access this resource`,
        });

      }

      next();
    };
};