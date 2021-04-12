const axios = require("axios");
const request = require("request")
const nodeFetch = require("node-fetch");

const getDataUsingAxios = async () => {
    const {data} = await axios.get("https://cat-fact.herokuapp.com/facts");
    console.log(data)
}
// getDataUsingAxios()

const getDataUsingrequrest = () => {
    request("https://cat-fact.herokuapp.com/facts", (error, response, body) => {
        if (error) throw ("error")
        console.log(response.statusCode)
        console.log(JSON.parse(body))
    });
}
// getDataUsingrequrest()


const getDataUsingNodeFetch = async () => {
    nodeFetch("https://cat-fact.herokuapp.com/facts")
        .then(res => res.text())
        .then(body => console.log(JSON.parse(body)));
}

getDataUsingNodeFetch()