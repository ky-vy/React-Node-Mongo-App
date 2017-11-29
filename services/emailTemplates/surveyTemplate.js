keys = require('../../config/keys')

module.exports = survey =>
  `
    <html>
      <body>
        <div style="text-align: center;">
          <h3>This is a survey!</h3>
          <p>please answer the following question:</p>
          <p>${survey.body}</p>
          <div>
            <a href="${keys.redirectDomain}/api/surveys/thanks">Yes</a>
          </div>
          <div>
            <a href="${keys.redirectDomain}/api/surveys/thanks">No</a>
          </div>
        </div>
      </body>
    </html>
  `
