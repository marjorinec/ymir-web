import express from "express";
// const express = require("express");

const app = express();

app.listen(3000, () => console.log("servidor rodando em localhost:3000 woo"));

app.get("/", (req, res) => {
  res.send("primeira rota express woo");
});
