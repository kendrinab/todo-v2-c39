# Purpose

This is a simple application that creates a RESTful Express API. It will give users the ability to CREATE, READ, UPDATE, and DELETE items from a To Do list.

# Setup

In Terminal, run the following commands:

- `git clone git@github.com:wyncode/first_express_server.git`
- `cd first_express_server`
- `yarn`
- To run your server, `yarn run dev`

# Making requests to the API

- In order to view all of the To Do items in this application, make an HTTP `GET` request to `/api/items.` You should receive an HTTP 200 response, and your sample response body will look something like the following:

```
[
    {
        "id": 1,
        "item": "get some eggs",
        "completed": true
    },
    {
        "id": 2,
        "item": "get some beer",
        "completed": false
    },
]
```

- To create a new To Do item in this application, make an HTTP `POST` request to `/api/items`. You should receive an HTTP 201 response, and the body of your `POST` request should look like this:

```
{
    "item": "the name of the thing we're including",
    "completed": false
}
```

- Once posted, a new item will return the following in the body of the response:

```
{
	"id": 3,
	"item": "the name of the thing we're launching",
	"completed": false
}
```

- In order to edit the contents of a single To Do item, make a `PUT` request to `/api/items/:id`. You should receive an HTTP 200 response, and a sample of the request body should look like the following:

```
{
	"item": "get some beer",
	"completed": true
}
```

- In order to delete a single item from our To Do items API, make a `DELETE` request to `/api/items/:id`. You should receive an HTTP 200 response, and the item that will be deleted will be returned.
