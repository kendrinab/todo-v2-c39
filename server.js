// server.js

/**
 * Required External Modules
 */

const express = require("express");
const path = require("path");

/**
 * App Variables
 */

const app = express();
const port = process.env.PORT || "8000";

/**
 *  App Configuration
 */

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

/**
 * Routes Definitions
 */

app.get("/", (req, res) => {
  res.status(200).send("TO DO App");
});

// this route will return all of the existing To Do items

const items = [];

let id = 0;

app.get("/api/items", (req, res, next) => {
  res.json(items);
});

// this route will create a new to do item

app.post("/api/items", (req, res, next) => {
  if (req.body.item) {
    id = id + 1;
    const newItem = {
      id: id,
      item: req.body.item,
      completed: false,
    };
    items.push(newItem);
    res.json(newItem);
  } else {
    res.status(400).json({ error: "item needs a description" });
  }
});

// this route will edit the item (or complete the item)

app.patch("/api/items/:id", (req, res, next) => {
  // get the parameter ID
  const itemID = Number(req.params.id);

  // we'll have to go through the items array
  // and find the particular item with the ID
  // we are looking for.
  const itemToComplete = items.find((item) => item.id === itemID);

  // If we find the item with the ID
  if (itemToComplete) {
    // We'll need to edit the item with the
    // thing that was in the request body

    // return the json of the item to complete
    res.json(itemToComplete);
  } else {
    // If not, return a HTTP 404 not found.
    res.status(404).json({ error: "item ID not found" });
  }
});

/**
 * Server Activation
 */

app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});
