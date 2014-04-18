
  if (typeof define === 'function' && define.amd) {
    define(function () {
      return scribe;
    });
  } else if (typeof module !== 'undefined' && module.exports) {
    module.exports = scribe;
  } else {
    global.Scribe = scribe;
  }

}(this));
