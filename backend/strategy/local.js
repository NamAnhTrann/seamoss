const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require("../schema/user/customerSchema");
const bcrypt = require("bcrypt");

//local strategy for authentication (login method not signin)
passport.use(
  new LocalStrategy(
    {
      usernameField: "userEmail",
      passwordField: "userPassword",
    },
    async function (username, password, done) {
      try {
        const user = await User.findOne({ userEmail: username });
        if (!user) {
          return done(null, false, { message: "Incorrect username." });
        }

        const isMatch = await bcrypt.compare(password, user.userPassword);
        if (!isMatch) {
          return done(null, false, { message: "Incorrect password." });
        }

        return done(null, user);
      } catch (err) {
        return done(err);
      }
    }
  )
);

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  User.findById(id, function (err, user) {
    done(err, user);
  });
});
