import database from "./database";
import express from "./express";
import Express from "express";

export default async ({
  expressApp,
}: {
  expressApp: Express.Application;
}): Promise<void> => {
  await database();
  console.log(`🍃 Connection to database successful`);
  await express({ app: expressApp });
  console.log("🚂 Express loaded");
};
