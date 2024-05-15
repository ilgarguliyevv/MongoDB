const mongoose = require("mongoose")

mongoose
    .connect("mongodb+srv://ilgarguliyev2004:ilqar123@cluster1.1selb0g.mongodb.net/users?retryWrites=true&w=majority&appName=Cluster1", { useNewUrlParser: true })
    .then(() => {
        console.log("connet db");
    })