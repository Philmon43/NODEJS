const fs = require("fs");
const yargs = require("yargs");
const uniqid = require("uniqid");

const getData = () => {
  try {
    return JSON.parse(fs.readFileSync("./data.json").toString());
  } catch (error) {
    return [];
  }
};

yargs.command({
  command: "add",
  builder: {
    name: {
      describe: "name",
      type: "string",
      demandOption: true,
    },
    email: {
      describe: "email",
      type: "string",
      demandOption: true,
    },
  },
  handler: (argv) => {
    const users = getData();
    users.push({ id: uniqid(), name: argv.name, email: argv.email });
    fs.writeFileSync("./data.json", JSON.stringify(users));
  },
});


yargs.command({
    command: "read",
    handler: () => {
      console.log(getData())
    },
  });


yargs.command({
  command: "delete",
  builder: {
    id: {
      describe: "id",
      type: "string",
      demandOption: true,
    },
  },
  handler: (argv) => {
    const users = getData();
    const newData = users.filter((user) => {
      return user.id !== argv.id;
    });
    fs.writeFileSync("./data.json", JSON.stringify(newData));
  },
});

yargs.parse();