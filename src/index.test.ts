import request from "supertest";
import express from "express";
import test from "node:test";

test("supertest works!", () => {
  const app = express();

  app.get("/user", function (req, res) {
    res.status(200).json({ name: "john" });
  });

  request(app)
    .get("/user")
    .expect("Content-Type", /json/)
    .expect("Content-Length", "15")
    .expect(200)
    .end(function (err, res) {
      if (err) throw err;
    });
});
