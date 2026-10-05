const pool = require('../models/db');

exports.all = async (req, res) => {
  const [rows] = await pool.query('SELECT * FROM etudiants');
  res.json(rows);
};
  