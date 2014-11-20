module.exports.guessFromArray = guessFromArray;

function evaluate (input) {
    var reference = ['e', 's', 'a', 'i', 't', 'n', 'r', 'u', 'l', 'o'];

    var letters = {};
    reference.forEach(function (letter) {
        letters[letter.charCodeAt(0)] = input.split(letter).length - 1;
    });

    

    // for (var i = 0; i < input.length; i++) {
    //     if ((input.charCodeAt(i) >= 65 && input.charCodeAt(i) <=  90) || (input.charCodeAt(i) >= 97 && input.charCodeAt(i) <= 122)) {
    //         if (letters[input[i]] == undefined) {
    //             letters[input[i]] = 1;
    //         }
    //         else
    //             letters[input[i]]++;
    //     }
    // }


    // var eval = 0;
    // for (var i = 0; i < letters.length; i++) {
    //     var j = i+1;
    //     while(letters[i] > letters[j]) {
    //         var tmp = letters[i];
    //         letters[i] = letters[j];
    //         letters[j] = tmp;
    //         j++;
    //     }
    // };


    var i = 0;
    letters.forEach(function (letter) {
        if (letter == reference[i]) {
            eval++;
        }
        i++;
    });

    return eval;
}

function guessFromArray(input) {
    var frenchy = input[0];
    var bestValue = evaluate(input[0]);

    for (var i = 1; i < input.length; i++) {
        if (bestValue < evaluate(input[i])) {
            frenchy = input[i];
            bestValue = evaluate(input[i]);
        }
    };

    return frenchy;
}
