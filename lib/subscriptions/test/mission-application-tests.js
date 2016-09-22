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
  });

  describe('Application invalid if...', function() {
    it('is expired', function() {
      var app = new MembershipApplication({validUntil: Date.parse('01/01/2010')});
      assert(app.expired());
    });
    it('Email is less than 4 chars', function() {
      var app = new MembershipApplication({email: 'd@d'});
      assert(!app.emailIsValid());
    });
    it('Email does not contain @', function() {
      var app = new MembershipApplication({email: 'dd:dd.com'});
      assert(!app.emailIsValid());
    });
    it('Height is less than 150', function() {
      var app = new MembershipApplication({height: 149});
      assert(!app.heightIsValid());
    });
    it('Height is more than 200', function() {
      var app = new MembershipApplication({height: 201});
      assert(!app.heightIsValid());
    });
    it('Age is less than 15', function() {
      var app = new MembershipApplication({age: 14});
      assert(!app.ageIsValid());
    });
    it('Age is more than 70', function() {
      var app = new MembershipApplication({age: 71});
      assert(!app.ageIsValid());
    });
  });
});

// To print the tests in HTML format, use:
// mocha --reporter doc
