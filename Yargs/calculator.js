const yargs = require("yargs");

yargs.command({
  command: "add",
  describe: "add two",
  builder: {
    num1: {
      describe: "First number",
      demandOptions: true,
      type: "integer",
    },
    num2: {
      describe: "Second number",
      demandOptions: true,
      type: "integer",
    },
  },
  handler(argv) {
    console.log(argv.num1 + argv.num2);
  },
});
yargs.command({
  command: "sub",
  describe: "subtract two numbers",
  builder: {
    num1: {
      describe: "First number",
      demandOptions: true,
      type: "integer",
    },
    num2: {
      describe: "Second number",
      demandOptions: true,
      type: "integer",
    },
  },
  handler(argv) {
    console.log(argv.num1 - argv.num2);
  },
});
yargs.command({
  command: "mult",
  describe: "multiply two numbers",
  builder: {
    num1: {
      describe: "First number",
      demandOptions: true,
      type: "integer",
    },
    num2: {
      describe: "Second number",
      demandOptions: true,
      type: "integer",
    },
  },
  handler(argv) {
    console.log(argv.num1 * argv.num2);
  },
});
yargs.command({
  command: "pow",
  describe: "number ^ 2",
  builder: {
    num: {
      describe: "number",
      demandOptions: true,
      type: "integer",
    },
    pow: {
      describe: "Second number",
      demandOptions: true,
      type: "integer",
    },
  },
  handler(argv) {
    console.log(Math.pow(argv.num, argv.pow));
  },
});
console.log(yargs.argv);
yargs.parse();
