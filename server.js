import express, { response } from "express";
import * as path from "path";
import fetch from "node-fetch";

const server = express();

server.set("view engine", "ejs");
server.set("views", "./views");
server.set("port", process.env.PORT || 8000);

server.use(express.static(path.resolve("public")));

server.listen(server.get("port"), () => {
  console.log(`Application started on http://localhost:${server.get("port")}`);
});

server.get("/", (req, res) => {
  res.render("index");
});

async function dataFetch(url) {
  const data = await fetch(url)
    .then((response) => response.json())
    .catch((error) => error);
  return data;
}

// server.get("/", (req, res) => {
//   let itemUrl = url + "/items/activities";
//   dataFetch(itemUrl).then((data) => {
//     console.log(data);
//     response.render("index", { data: data });
//   });
// });

// async function dataFetch(url) {
//   const data = await fetch(url, {
//     headers: {
//       Authorization: "Bearer -xWJUqFTn3NSpbRIMxytzqlCVs8WF8rLB",
//     },
//   })
//     .then((response) => response.json())

//     .catch((error) => error);

//   return data;
// }

