import dotenv from "dotenv";
dotenv.config();

process.env.NODE_ENV = process.env.NODE_ENV || "development";

export default {
  port: parseInt(process.env.PORT) || 5050,
  databaseURL: process.env.MONGODB_URI,
  api: {
    prefix: "/api/v1",
  },
};
