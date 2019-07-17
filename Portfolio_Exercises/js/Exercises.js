// JavaScript source code

$("#btnMath").click(function () {

    var num1 = +$("#num1").val();
    var num2 = +$("#num2").val();
    var num3 = +$("#num3").val();
    var num4 = +$("#num4").val();
    var num5 = +$("#num5").val();


    var least = Math.min(num1, num2, num3, num4, num5);
    $("#least").text(least);


    var max = Math.max(num1, num2, num3, num4, num5);
    $("#max").text(max);

    var mean1 = num1 + num2 + num3 + num4 + num5;
    var mean = mean1 / 5;
    $("#mean").text(mean);

    var sum = num1 + num2 + num3 + num4 + num5;
    $("#sum").text(sum);

    var product = num1 * num2 * num3 * num4 * num5;
    $("#product").text(product);


});

$("#btnFact").click(function () {
    var Factnum = Number($("#Fact1").val());
    var result = Factorial(Factnum);
    $("#Fact").text(result);


});

$("#btnFact2").click(function () {
    var Factnum = Number($("#Fact22").val());
    var result = Factorial(Factnum);
    $("#Fact2").text(result);


});





$("#btnMath1").click(function () {

    var num1 = +$("#num6").val();
    var num2 = +$("#num7").val();
    var num3 = +$("#num8").val();
    var num4 = +$("#num9").val();
    var num5 = +$("#num10").val();


    var least = Math.min(num1, num2, num3, num4, num5);
    $("#least1").text(least);


    var max = Math.max(num1, num2, num3, num4, num5);
    $("#max1").text(max);

    var mean2 = num1 + num2 + num3 + num4 + num5;
    var mean = mean2 / 5;
    $("#mean1").text(mean);

    var sum = num1 + num2 + num3 + num4 + num5;
    $("#sum1").text(sum);

    var product = num1 * num2 * num3 * num4 * num5;
    $("#product1").text(product);


});




$("#btnFizzBuzz").click(function () {
    var value1 = Number($("#Fizz").val());
    var value2 = Number($("#Buzz").val());
    var answer = FizzBuzzB(value1, value2);
    $("#FizzbuzzR").text(answer);
});

$("#btnFizzBuzz1").click(function () {
    var value1 = Number($("#Fizz1").val());
    var value2 = Number($("#Buzz1").val());
    var answer = FizzBuzzA(value1, value2);
    $("#FizzbuzzR1").text(answer);
});



$("#btnPal").click(function () {
    var input = $("#txtword").val();
    var res = input.replace(" ", "");
    
    var output = ReverseAString2(res);



    if (res.toLowerCase() == output.toLowerCase()) {
        $("#palindromeResult").text(input + " reversed is  " + output + ".  This is a palindrome");
    }

    else
        $("#palindromeResult").text(input + " reversed is " + output + ".  This is not a palindrome");

})


$("#btnPal1").click(function () {
    var input = $("#txtword1").val();
    
    var output = ReverseAString2(input);



    if (input.toLowerCase() == output.toLowerCase()) {
        $("#palindromeResult1").text("The word " + input + " reversed is " + output + ".  This word is a palindrome");
    }

    else
        $("#palindromeResult1").text("The word " + input + " reversed is " + output + ".  This word is not a palindrome");

})

function FizzBuzzA(value1, value2) {

    let returnValue = '';
    for (let i = 1; i <= 100; i++) {

        returnValue += ((i % value1 == 0 ? ' Fizz, ' : '' ) + (i % value2 == 0 ? ' Buzz, ' : '' ) + (i % value1 == 0 && i % value2 == 0 ? ' FizzBuzz, ' : '' ) || i + ',' );

    }
    return returnValue;
}

function FizzBuzzB(value1, value2) {
    var output = "";
    for (var loop = 1; loop <= 100; loop++) {

        if (loop % value1 == 0 && loop % value2 == 0)
            output += "FizzBuzz  ";
        else if (loop % value1 == 0)
            output += "Fizz  ";
        else if (loop % value2 == 0)
            output += "Buzz  ";
        else (output += loop + "  ");
    }
    return output;

}

function Factorial(number) {

    for (var loop = number - 1; loop > 1; loop--) {
        number *= loop
    }

    return number;


}


function ReverseAString1(word) {


    var output = "";
    for (var index = word.length - 1; index >= 0; index--) {
        output += word.substr(index, 1);
    }
    return output;
}

function ReverseAString2(word) {

   
    return word.split('').reverse().join('');
}

$(function () {

    $("#showCode").hide();

    $("#btnshowCode").click(function () {
        $("#showCode").toggle();
        var text = $(this).text();
        if (text == "Show Code") {
            $(this).text("Hide Code");
        }
        else {
            $(this).text("Show Code");
        }
    })

});

$(function () {

    $("#showCode1").hide();

    $("#btnshowCode1").click(function () {
        $("#showCode1").toggle();
        var text = $(this).text();
        if (text == "Show Code") {
            $(this).text("Hide Code");
        }
        else {
            $(this).text("Show Code");
        }
    })
});

$(function () {

    $("#showCode2").hide();

    $("#btnshowCode2").click(function () {
        $("#showCode2").toggle();
        var text = $(this).text();
        if (text == "Show Code") {
            $(this).text("Hide Code");
        }
        else {
            $(this).text("Show Code");
        }
    })
});

$(function () {

    $("#showCode3").hide();

    $("#btnshowCode3").click(function () {
        $("#showCode3").toggle();
        var text = $(this).text();
        if (text == "Show Code") {
            $(this).text("Hide Code");
        }
        else {
            $(this).text("Show Code");
        }
    })
});


