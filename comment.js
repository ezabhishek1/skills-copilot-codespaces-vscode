//create a web server using express
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const Comment = require('./models/comment'); // Assuming you have a Comment model defined in models/comment.js
const Member = require('./models/member'); // Assuming you have a Member model defined in models/member.js
const Skill = require('./models/skill'); // Assuming you have a Skill model defined in models/skill.js
const PORT = process.env.PORT || 3000;
const MONGODB_URI = 'mongodb://localhost:27017/your_database_name'; // Replace with your MongoDB URI
const { ObjectId } = require('mongodb');
const { check, validationResult } = require('express-validator');
const { body, param } = require('express-validator');
const { sanitizeBody } = require('express-validator');
