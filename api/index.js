module.exports = (req, res) => {
  const request = require("request");

  request(
    "https://d2g9cow0nr2qp.cloudfront.net/?q=eyAnZnJvbSc6IDE1OTQ2Nzc2MDAsICd0byc6IDE1OTQ3NjM5OTksICdhbGwnOiAndHJ1ZScgfQ==",
    { json: true },
    (err, ress, body) => {
      if (err) {
        return console.log(err);
      }
      res.json(body);
    }
  );
};
