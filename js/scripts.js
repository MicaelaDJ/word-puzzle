$(document).ready(function() {
  $("#ourForm").submit(function(event) {
    var vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
    var string = $("input#string").val();
    var array = string.split('');
    var newArray = [ ];
    var sentence;
    for (i = 0; i <= string.length; i++) {
      if (array[i] === vowels[0] || array[i] === vowels[1] || array[i] === vowels[2] || array[i] === vowels[3] || array[i] === vowels[4] || array[i] === vowels[5] || array[i] === vowels[6] || array[i] === vowels[7] || array[i] === vowels[8] || array[i] === vowels[9]){
        newArray.push("-");
      } else {
        newArray.push(array[i]);
      }
    }
    sentence = newArray.join("");
    $("#output").text(sentence);
    event.preventDefault();
  });
});
