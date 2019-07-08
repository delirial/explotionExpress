//TODO : Validator for empty input
if (Object.keys(req.body).length <= 0) return res.status(400).send('Empty body?');
