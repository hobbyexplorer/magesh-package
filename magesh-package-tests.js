// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by magesh-package.js.
import { name as packageName } from "meteor/mageshkhanna:magesh-package";

// Write your tests here!
// Here is an example.
Tinytest.add('magesh-package - example', function (test) {
  test.equal(packageName, "magesh-package");
});
