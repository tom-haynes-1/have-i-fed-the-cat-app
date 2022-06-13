const express = require('express');
const { Cat } = require('./models');
const { restart } = require('nodemon');

const app = express();

app.use(express.json());

app.post('/cats', (req, res) => {
    Cat.create(req.body).then(cat => res.status(201).json(cat)).catch(cat => res.status(400).json('error creating cat'));
});

module.exports = app;