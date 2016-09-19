var _ = require('underscore')._;

var MembershipApplication = function(args) {

  _.extend(this, args);

  this.emailIsValid = function() {
    return this.email && this.email.length > 3 && this.email.indexOf('@') > -1;
  };

  this.heightIsValid = function() {
    return this.height && this.height > 150 && this.height < 200;
  };

  this.ageIsValid = function() {
    return this.age && this.age > 15 && this.age < 70;
  };

  this.isValid = function() {
    return this.emailIsValid() &&
      this.heightIsValid() &&
      this.ageIsValid();
  };
};

module.exports = MembershipApplication;
