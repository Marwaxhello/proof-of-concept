import express, { response } from "express";
import * as path from "path";
import fetch from "node-fetch";

const server = express();
const url = "https://api.fivespark.com";

server.set("view engine", "ejs");
server.set("views", "./views");
server.set("port", process.env.PORT || 8000);

server.use(express.static(path.resolve("public")));

server.listen(server.get("port"), () => {
  console.log(`Application started on http://localhost:${server.get("port")}`);
});

server.get("/", async (req, res) => {
  try {
    const itemUrl = url + "/items/activities";
    const { data } = await dataFetch(itemUrl);

    res.render("index", { activities: data });
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred");
  }
});


async function dataFetch(url) {
  const data = await fetch(url, {
    headers: {
      Authorization: "Bearer xWJUqFTn3NSpbRIMxytzqlCVs8WF8rLB",
    },
  })
    .then((response) => response.json())

    .catch((error) => error);

  return data;
}
