var WebPage = (function() {
    function input(name, isAutoFocused) {
      var element = document.createElement("input");
      element.name = name;
      element.autofocus = isAutoFocused;
      return element;
    }

    function div(id, cssClass) {
      var element = document.createElement("div");
      element.id = id;
      element.classList.add(cssClass);
      return element;
    }

    function image(id, src) {
      var element = document.createElement("img");
      element.id = id;
      element.src= src;
      element.width="200";
      element.height="100"
      return element;
    }

    return {
      input: input,
      div: div,
      image: image
    }
  })();
