import { Pool } from "pg";

const pool = new Pool({
  user: "postgres",        
  host: "localhost",       
  database: "TaskManager",
  password: "2abc654.W", 
  port: 5432,             
});

export default pool;
