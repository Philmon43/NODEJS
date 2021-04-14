const https = require("https");

const request = https.request("https://cat-fact.herokuapp.com/facts", (res) => {
    let data = ""
    res.on("data", (chunck) => {
       data = data + chunck.toString()
    })

    res.on("end", () => {
        console.log(JSON.parse(data))
    })
});

request.end()