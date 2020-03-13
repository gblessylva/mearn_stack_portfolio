// Copyright IBM Corp. 2016. All Rights Reserved.
// Node module: loopback-workspace
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

const loopback = require('loopback');
const boot = require('loopback-boot');

const app = module.exports = loopback();

app.start = function() {
  // start the web server
  return app.listen(function() {
    app.emit('started');
    const baseUrl = app.get('url').replace(/\/$/, '');
    console.log('Web server listening at: %s', baseUrl);
    if (app.get('loopback-component-explorer')) {
      const explorerPath = app.get('loopback-component-explorer').mountPath;
      console.log('Browse your REST API at %s%s', baseUrl, explorerPath);
    }
  });
};

// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.
boot(app, __dirname, function(err) {
  if (err) throw err;

  // start the server if `$ node server.js`
  if (require.main === module)
    app.start();
});

console.log(Object.keys(app.models));
app.models.user.find((err, result) => {
  if (result.length === 0) {
    const user = {
      email: 'gblessylva@gmail.com',
      password: 'password',
      username: 'sly',
    };
    app.models.user.create(user, (err, result) =>{
      console.log('New user ', result, ' Created');
    });
  }
});

app.models.user.afterRemote('create', (ctx, user, next)=>{
  console.log('user name is', user);
  app.models.Profile.create({
    userName: user.username,
    createdAt: new Date(),
    userId: user.id,
    lastName: user.lastName,
  },
  (err, result)=>{
    if (!err && result) {
      console.log('new user', result);
    } else {
      console.log(err);
    }
    next();
  }

  );
});

// Creat6e admin Role
app.models.Role.find({where: {name: 'admin'}}, (err, role)=>{
  if (!err && role) {
    if (role.length === 0) {
      app.models.Role.create(
        {name: 'admin'},
        (err2, result)=>{
          console.log(result);
          if (!err2 && result)        {
            app.models.user.findOne(
              (userErr, user) =>{
                if (!userErr && user) {
                  result.principals.create(
                    {
                      principalType: app.models.RoleMapping.USER,
                      principalId: user.id,
                    }, (err3, principal)=>{
                      console.log('Prinscipal Created', err3, principal);
                    }
                  );
                }
              }
            );
          }
        }
      );
    }
  }
});

// Create editor role

app.models.Role.find({where: {name: 'editor'}}, (error, roles)=>{
  if (!error && roles) {
    if (roles.length === 0) {
      app.models.Role.create({
        name: 'editor',
      }, (creationErr, creationResult) =>{
        console.log(creationErr, creationResult);
      });
    }
  }
});
