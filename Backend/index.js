const http = require("http")

const routes = require("./routes")
const router = require("./router")

const app = http.createServer(async (req,res) => {
    await router(req,res,routes);
})

app.listen(3000,() => {
    console.log("server started!!");
})
