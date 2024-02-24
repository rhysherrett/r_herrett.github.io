/*setting the varibles for the quiz js */
var button1 = document.getElementById('bnt1');
var button2 = document.getElementById('bnt2');
var button3 = document.getElementById('bnt3');
var button4 = document.getElementById('bnt4');
var button5 = document.getElementById('bnt5');
var button6 = document.getElementById('bnt6');
var button7 = document.getElementById('bnt7');
var button8 = document.getElementById('bnt8');
var button9 = document.getElementById('bnt9');
var button10 = document.getElementById('bnt10');
var button11 = document.getElementById('bnt11');
var button12 = document.getElementById('bnt12');
var button13 = document.getElementById('bnt13');
var button14 = document.getElementById('bnt14');
var button15 = document.getElementById('bnt15');
var button16 = document.getElementById('bnt16');
var button17 = document.getElementById('bnt17');
var button18 = document.getElementById('bnt18');
var button19 = document.getElementById('bnt19');
var button20 = document.getElementById('bnt20');
var button21 = document.getElementById('bnt21');
var button22 = document.getElementById('bnt22');
var button23 = document.getElementById('bnt23');
var button24 = document.getElementById('bnt24');
var result = document.getElementById('finalResult');
var quiz = document.getElementById('content');
var questions = [false, false, false, false, false, false, false, false];
var answers = ['b', 'c', 'a', 'c', 'b', 'a', 'c', 'b'];
var score = 0;
var questionsAnswered = 0;
/*main game js */
function game(x, y, z) {
    if (x === answers[y] && questions[y] === false) {
        z.style.backgroundColor = 'green';
        score += 1;
        questionsAnswered += 1;
        questions[y] = true;
        var percentage = (score / 8) * 100;

    } else if (x !== answers[y] && questions[y] === false) {
        z.style.backgroundColor = 'green'
        questionsAnswered += 1;
        questions[y] = true;
        var percentage = (score / 8) * 100;

    }
};
/*submit final score */
function finalScore() {
    if (score >= 7) {
        quiz.style.display = 'none';
        result.style.display = 'inline-block';
        var percentage = (score / 8) * 100;

        document.getElementById('congrats').innerHTML = '*Welldone*';
        document.getElementById('yourScore').innerHTML = 'You scored ' + score + ' out of 8 thats ' + percentage + '%.';
        document.getElementById('advice').innerHTML = 'You really know your stuff';
    } else if (score >= 5) {
        quiz.style.display = 'none';
        result.style.display = 'inline-block';
        var percentage = (score / 8) * 100;

        document.getElementById('congrats').innerHTML = 'Not Bad';
        document.getElementById('yourScore').innerHTML = 'You scored ' + score + ' out of 8 thats ' + percentage + '%.';
        document.getElementById('advice').innerHTML = 'Keep up the learning';
    } else {
        quiz.style.display = 'none';
        result.style.display = 'inline-block';
        var percentage = (score / 8) * 100;

        document.getElementById('congrats').innerHTML = 'Not Good';
        document.getElementById('yourScore').innerHTML = 'You scored ' + score + ' out of 8 thats ' + percentage + '%.';
        document.getElementById('advice').innerHTML = 'You really should read more';
    }
};
/*fuction to make sure all questions are marked*/
function allQuestionsDone() {
    if (questionsAnswered === 8) {
        finalScore();
    } else {
        document.getElementById('error').innerHTML = 'Woops looks like you missed out a question please check and re-submit';
        document.getElementById('error').style.color = 'red';
    }
};
