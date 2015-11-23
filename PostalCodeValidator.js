/*
 * Based on PHP version https://github.com/sirprize/postal-code-validator
 * stricte@gmail.com
 * MIT License
 */
PostalCodeValidatorJs = (function () {
  var my = {},
    postalCodesMasks = {
    'LV': ['####'],
    'EE': ['#####'],
    'GB': ['@# #@@', '@** #@@', '@@#* #@@'],
    'LT': ['#####'],
    'PL': ['##-###']
  };

  function postalCodeMaskDefined(countryCode){
    if (countryCode in postalCodesMasks)
      return true;
    else
      return false;
  }

  function getPostalCodeMasks(countryCode){
    return postalCodesMasks[countryCode];
  }

  function getPatterns(countryCode){
    var patterns = [];
    var masks = getPostalCodeMasks(countryCode);

    masks.forEach(function(mask){
      var p = mask.replace(/#/g, '[0-9]');
      p = p.replace(/@/g, '[a-zA-Z]');
      p = p.replace(/\*/g, '[a-zA-Z0-9]');
      p = '^' + p + '$';

      patterns.push(p);
    });

    return patterns;
  }

  my.isValid = function (postal, countryCode) {
    if(!this.hasCountry(countryCode))
      throw 'No mask for this country code ' + countryCode;

    var patterns = getPatterns(countryCode);
    if(patterns.length === 0)
      return false;

    var valid = false;

    patterns.forEach(function(pattern){
      var re = new RegExp(pattern, 'gi');
      if(re.test(postal))
        valid = true;
    });

    return valid;
  };


  my.hasCountry = function (countryCode) {
    return postalCodeMaskDefined(countryCode);
  };

  return my;
}());
