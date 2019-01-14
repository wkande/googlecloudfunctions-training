/**
 * HTTP Cloud Function.
 *
 * @param {Object} req Cloud Function request context.
 * @param {Object} res Cloud Function response context.
 */
exports.helloGET = (req, res) => {
  res.send('Hello World from the Dude!');
  // The first commit did not go thru the webhook to Google Repo. Try again!
};
