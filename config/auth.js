const dotenv = require('dotenv');
dotenv.config();

const secret = process.env.SECRET || 'defaultSecret';
module.exports = secret;
