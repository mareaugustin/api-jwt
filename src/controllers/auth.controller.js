const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const pool = require('../models/db');

const SECRET = 'SECRET123';  

exports.register = async (req, res) => {
  const { email, password } = req.body;
  const hash = await bcrypt.hash(password, 10);
  await pool.query(
    'INSERT INTO users (email, password) VALUES (?, ?)',
    [email, hash]
  );
  res.json({ message: 'User registered' });
};
   
exports.login = async (req, res) => {
  const { email, password } = req.body;
  const [[user]] = await pool.query(
    'SELECT * FROM users WHERE email=?',
    [email]
  );
  if (!user) return res.sendStatus(401);

  const ok = await bcrypt.compare(password, user.password);
  if (!ok) return res.sendStatus(401);

  const token = jwt.sign({ id: user.id }, SECRET, { expiresIn: '1h' });
  res.json({ token });
};


exports.welcome = async (req, res) => {
const date ={
  "api" : " Api gestion connexion user avec gestion role et affichage de donnees",
  "status": "succes"
}
  res.json({ date });
};
