var assert = require('assert');
var level = require('levelup');
var db = level('/tmp/my_level_db');

var i=0;
var prefix = "customer~article";

before(function () {
});

after(function (done) {
  db.close(function (err, result) {
    console.log(arguments);
    done();
  });
});

function doit(done) {
  var name = prefix + (++i);
  db.del(name, {}, function (err, result) {
    console.log(arguments);
    db.put(name, 'LevelUP', function (err) {
      if (err) return console.log('Ooops!', err) // some kind of I/O error

        // 3) fetch by key
        db.get(name, function (err, value) {
          if (err) return console.log('Ooops!', err) // likely the key was not found

            // ta da!
            console.log(name + '=' + value)
            done();
        })
    })
  });
}

it( 'runs', function (done) { doit(done); });
it( 'runs', function (done) { doit(done); });
it( 'runs', function (done) { doit(done); });
it( 'runs', function (done) { doit(done); });
it( 'runs', function (done) { doit(done); });
it( 'runs', function (done) { doit(done); });











