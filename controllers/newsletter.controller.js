var { Newsletter } = require("../models/models");

async function newsletterSignUp(req, res, next) {
  try {
    const email = req.fields.email.trim().toLowerCase();
    await Newsletter.findOrCreate({ where: { email } });
    res.status(201).end();
  } catch (error) {
    console.error(error);
    res.status(500).end();
  }
}

module.exports = {
  newsletterSignUp,
};
