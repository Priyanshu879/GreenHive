import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";
const sql = neon("postgresql://neondb_owner:npg_rq5K4SHeTpOu@ep-falling-rice-a8tudhn2-pooler.eastus2.azure.neon.tech/neondb?sslmode=require");

export const db = drizzle(sql, {schema});