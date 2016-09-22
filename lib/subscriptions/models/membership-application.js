var _ = require('underscore')._;
var moment = require('moment');

var MembershipApplication = function(args) {

  args || (args = {});
  _.extend(this, args);

  this.validUntil = args.validUntil ? moment(args.validUntil) : moment().add(10, 'days');

  this.expired = function() {
    return this.validUntil.isBefore(moment());
  };

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
      this.ageIsValid() &&
      !this.expired();
  };
};

module.exports = MembershipApplication;
