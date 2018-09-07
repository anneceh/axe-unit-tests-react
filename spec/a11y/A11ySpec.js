describe ('axe', function() {
  'use strict';

  document.getElementsByTagName('body')[0].insertAdjacentHTML('beforeend',
  '<img id="top_image" src="images/example.jpg" width="200" height="100">'
  );

  it('should not have accessibility errors in element', function (done) {
      var n = document.getElementById('top_image');
      axe.run(n, {}, function (error, result) {
          if (result.violations.length > 0) {
              var results = JSON.stringify(result.violations, null, 4);
          }
          expect(results).toEqual(0);
          expect(result.violations.length).toBe(0);
          done();
      });
  });
});