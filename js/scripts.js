var convertToRoman = function makeRoman(num) {
    var roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    var arabic = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

    var romanized = [''];

    for (var i=0; i < arabic.length; i++){
      while (arabic[i] <= num) {
        romanized += roman[i];
        num -= arabic[i];
      }
    }
    return romanized;
  };

$(document).ready(function(){
 $('form#roman-num').submit(function(event) {
    event.preventDefault();
    var someInput = $('input#stringIn').val('arabic');
    var someOutput = $('')
    alert(convertToRoman);

  })
});
