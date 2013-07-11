Terminal.options = {
  "termName": "xterm-256color",
  "debug": false
};
(function applyConfig() {
  var hasOwnProperty = Object.prototype.hasOwnProperty;

  for (var key in Terminal.options) {
    if (!hasOwnProperty.call(Terminal.options, key)) continue;
    if (typeof Terminal.options[key] === 'object' && Terminal.options[key]) {
      if (!Terminal[key]) {
        Terminal[key] = Terminal.options[key];
        continue;
      }
      for (var k in Terminal.options[key]) {
        if (hasOwnProperty.call(Terminal.options[key], k)) {
          Terminal[key][k] = Terminal.options[key][k];
        }
      }
    } else {
      Terminal[key] = Terminal.options[key];
    }
  }

  delete Terminal.options;
})();
