# rest_Api

This repo is about how to create a rest API for beginners  using MVC pattern.

## Tech Stack

**Database:** Mongodb

**Server:** Node, Express, Mongoose
 
 ## Run Locally

Clone the project

```bash
  git clone https://github.com/B-chandru/rest_Api.git
```

Go to the project directory

```bash
  cd rest_Api
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```
  
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT=5000`

`MONGODB=mongodb://localhost:27017/restapi`



  
## API Reference

#### Get all items

```http
  GET  http://localhost:5000/app/
```


#### Get items by id

```http
  GET http://localhost:5000/app/:id
```


#### post

```http
  POST http://localhost:5000/app/
```

for post request  the json formate should be like this :

```bash
  
{
    "title":"my first api",
    "content":"how to create an api"
}
```


  #### Put

```http
  PUT http://localhost:5000/app/:id
```
#### if the put request is successful then you get this as a response
```bash
  {
  "msg": "updated the msg"
   }
```

#### Delete

```http
  DELETE  http://localhost:5000/app/:id
```

#### if the delete request is successful then you get this as a response
```bash
 
{
  "msg": "deleted the msg"
}
```



