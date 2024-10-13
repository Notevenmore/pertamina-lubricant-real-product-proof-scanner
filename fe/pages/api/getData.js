import pool from "@/utils/db";

export default async function handler(req, res) {
  try {
    const { query, tableName } = req.body;
    const [rows] = await pool.query(`SELECT * FROM ${tableName} ${query}`);
    res.status(200).json(rows);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Database query failed" });
  }
}
