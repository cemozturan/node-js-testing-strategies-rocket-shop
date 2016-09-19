var assert = require('assert');
var MembershipApplication = require('../models/membership-application');

describe('Membership application requirements', function() {
  // create a variable to represent the state of the thing under test
  var validApp;

  // This before block goes off before everything else does in this block.
  before(function(){
    // arrange the data here
    validApp = new MembershipApplication({
      email: 'test@test.com',
      age: 40,
      height: 180
    });
  });
  describe('Application valid if...', function() {
    it('all validators successful', function() {
      assert(validApp.isValid(), "Not valid");
    });
    it('email is more than 3 chars and contains an @', function() {
      assert(validApp.emailIsValid(), "Email not valid");
    });
    it('height is between 150 and 200', function() {
      assert(validApp.heightIsValid(), "Height not valid");
    });
    it('age is between 15 and 70', function() {
      assert(validApp.ageIsValid(), "Age not valid");
    });
  });
});
