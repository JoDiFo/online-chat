import pgk from "pg";
const { Client } = pgk;

export const client = new Client({
  user: "postgres",
  host: "localhost",
  database: "online_chat",
  password: "postgres",
  port: 5432,
});

client.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});
