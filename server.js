import Express from "express";

const app = Express();

// GET, PUT, POST, DELETE
app.get("/", (req, res) => {
    res.send("hello");
});

app.listen(37716, ()=> console.log("listening on port " + 37716))