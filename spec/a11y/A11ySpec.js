describe ('Testing UI with axe', function() {
  'use strict';

  beforeAll(function() {
      var body = document.getElementsByTagName("body")[0];
      var div = WebPage.div("div1", "redBg");
      body.appendChild(div);
      div.appendChild(WebPage.input("search", true));
      div.appendChild(WebPage.image("logo", "images/example.jpg"));
    });

  it('should not have accessibility errors in element', function (done) {
      var n = document.getElementById('div1');
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
