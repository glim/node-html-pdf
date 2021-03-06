// Generated by CoffeeScript 1.10.0
(function() {
  var PDF;

  PDF = require('./pdf');

  exports.create = function(html, options, callback) {
    var err, error, pdf;
    if (arguments.length === 1) {
      return new PDF(html);
    }
    if (arguments.length === 2 && typeof options !== 'function') {
      return new PDF(html, options);
    }
    if (arguments.length === 2) {
      callback = options;
      options = {};
    }
    try {
      pdf = new PDF(html, options);
    } catch (error) {
      err = error;
      return callback(err);
    }
    return pdf.exec(callback);
  };

}).call(this);
