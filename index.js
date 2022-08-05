const axios = require("axios");
var http = require("http");

axios
  .get("https://jsonplaceholder.typicode.com/users")
  .then((res) => {
    console.log("Status Code:", res.status);
    const users = res.data;
    objIndex = users.findIndex((obj) => obj.id == 1);
    users[objIndex].name = "Rifqi";
    console.log(users);
    http
      .createServer(function (req, res) {
        res.writeHead(200, { "Content-Type": "text/html" });
        for (user of users) {
          res.write(
            "<li>Got user with id: " +
              user.id +
              ", name: " +
              user.name +
              "</li>"
          );
        }
        res.end();
      })
      .listen(8080);
  })
  .catch((err) => {
    console.log("Error: ", err.message);
  });
