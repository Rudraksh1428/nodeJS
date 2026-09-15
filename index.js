const express = require("express");

const users = require("./MOCK_DATA.json");

const app = express();

const PORT = 8000;


const userSchema= new mongoose.Schema({
firstName : {
  type : String ,
  required : true
} , 
lastName : {
  type : String 
} , 
email : {
  required : true ,
  type : String ,
  unique : true
},
jobTitle : 
{
  type : String ,
},
gender : {
  type : String
}
})








app.use(express.urlencoded({ extended: false }));

app.get("/api/users", (req, resp) => {
  return resp.json(users);
});

app
  .route("/api/users/:id")
  .get((req, resp) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    return resp.json(user);
  })
  .put((req, resp) => {
    resp.json({ Status: "pending" });
  })
  .patch((req, resp) => {
    resp.json({ Status: "pending" });
  })
  .delete((req, resp) => {
    resp.json({ Status: "pending" });
  });

app.post("/api/users", (req, resp) => {
  const body = req.body;
  console.log(body);

  resp.json({ Status: "pending" });
});
app.listen(PORT, () => console.log("Server is running"));
