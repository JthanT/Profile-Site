const User = require('../../models/User');
const UserSession = require('../../models/UserSession');

module.exports = (app) => {
  app.post('/api/account/signup', (req, res) => {
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    let email = req.body.email;
    let username = req.body.username;
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
    }, (err, users) => {
      if(err) {
        return res.send({
          success: false,
          message: 'Error: Server error'
        });
      }

      if(users.length > 0) {
        return res.send({
          success: false,
          message: 'Error: Account already exists.'
        });
      }


      const newUser = new User();

      newUser.firstname = firstname;
      newUser.lastname = lastname;
      newUser.email = email;
      newUser.username = username;
      newUser.password = newUser.generateHash(password);

      newUser.save((err, user) => {
        if(err) {
          return res.send({
            success: false,
            message: 'Error: Server error'
          });
        }
        return res.send({
          success: true,
          message: 'Signed up'
        });
      });
    });
  });

  app.post('/api/account/signin', (req, res) => {
    let email = req.body.email;
    const password = req.body.password;

    if(!email) {
      return res.send({
        success: false,
        message: 'Error: Email cannot be blank.'
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
    }, (err, users) => {
      if(err) {
        return res.send({
          success: false,
          message: 'Error: Server error.'
        });
      }
      if(users.length != 1) {
        return res.send({
          success: false,
          message: 'Error: Invalid1.'
        });
      }

      const user = users[0];
      if(!user.validPassword(password)) {
        return res.send({
          success: false,
          message: 'Error: Invalid2.'
        });
      }

      const userSession = new UserSession();
      userSession.userID = user._id;
      userSession.save((err, doc) => {
        if(err) {
          return res.send({
            success: false,
            message: 'Error: Server error.'
          });
        }

        return res.send({
          success: true,
          message: 'Valid sign in',
          token: doc._id
        });
      });
    });
  });
};
