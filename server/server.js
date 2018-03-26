/** --- DO NOT MODIFY --- **/
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('server/public'));

app.listen(PORT, (req, res) => {
  console.log('Listening on port', PORT);
});
