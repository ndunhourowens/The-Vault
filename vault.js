
'use strict';
module.exports = function() {
  var vault = {};

  function _setValue ( key, value) {
    vault[key] = value;
  }

  function _getValue ( key) {
    if ( vault.hasOwnProperty(key)) {
      return vault[key];
    }else {
      return null;
    }
  }

return {
  setValue : _setValue,
  getValue : _getValue
};
};

