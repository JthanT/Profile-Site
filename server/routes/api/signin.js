const User = require('../../models/User');

module.exports = (app) => {
  app.post('/api/account/signup', (req, res) => {
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const email = req.body.email;
	  const username = req.body.username;
	  const password = req.body.password;

    if(!firstname) {
      return res.send({
        success: false,
        message: 'Error: Firstname cannot be blank.'
      });
    }
    if(!lastname) {
      return res.send({
        success: false,
        message: 'Error: Lastname cannot be blank.'
      });
    }
    if(!email) {
      return res.send({
        success: false,
        message: 'Error: Email cannot be blank.'
      });
    }
    if(!username) {
      return res.send({
        success: false,
        message: 'Error: Username cannot be blank.'
      });
    }
    if(!password) {
      return res.send({
        success: false,
        message: 'Error: Password cannot be blank.'
      });
    }

    email = email.toLowerCase();
    email = email.trim();

    User.find({
      email: email
    }, (err, previousUsers) => {
      if(err) {
        return res.send({
          success: false,
          message: 'Error: Server error'
        });
      } else if (previousUsers.length > 0) {
        return res.send({
          success: false,
          message: 'Error: Account already exists.'
        })
      }
    });

    const newUser = new User();

    newUser.firstname = firstname;
    newUser.lastname = lastname;
    newUser.email = email;
    newUser.username = username;
    newUser.password = newUser.generateHash(password);




  });
};
