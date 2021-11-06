import {MongoClient } from "https://deno.land/x/mongo@v0.28.0/mod.ts";


const client = new MongoClient();
await client.connect("mongodb://localhost:9001");
const ApiDB = client.database("api");

export {ApiDB}