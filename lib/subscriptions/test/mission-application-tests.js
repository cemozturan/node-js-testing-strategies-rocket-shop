var assert = require('assert');
var MembershipApplication = require('../models/membership-application');

describe('Applying for mission', function() {
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
  describe('Using valid email, height, age', function() {
    it('is valid', function() {
      assert(validApp.isValid(), "Not valid");
    });
    it('reports a valid email', function() {
      assert(validApp.emailIsValid(), "Email not valid");
    });
    it('reports a valid height', function() {
      assert(validApp.heightIsValid(), "Height not valid");
    });
    it('reports a valid age', function() {
      assert(validApp.ageIsValid(), "Age not valid");
    });
  });
});
