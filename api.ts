import { listenAndServe } from "https://deno.land/std@0.111.0/http/server.ts";
import {  handleRequest} from "./Routers/handleRequest.ts";

console.log("Listening on http://localhost:8080");


await listenAndServe(":8080", handleRequest )
