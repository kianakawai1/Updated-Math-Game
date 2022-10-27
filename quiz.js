player1_score = 0;
player2_score = 0;
challenged = 2; //can either be 1 or 2;

function send(){
    number1 = document.getElementById("number1_input").value;
    number2 = document.getElementById("number2_input").value;
    actual_answer = (number1) * (number2);

    question_number = "<h4>" + number1 + " X "+ number2 + "</h4>";
    input_box = "<br>Answer : <input type='text' id='answerinput'/>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_number + input_box + check_button ;

    document.getElementById("output").innerHTML = row;

    document.getElementById("number1_input").value = "";
    document.getElementById("number2_input").value = "";
}

function check(){
    console.log("in check 1. actual_answer: "+ actual_answer + "  answerinput: " + document.getElementById("answerinput").value);
    if (actual_answer == document.getElementById("answerinput").value) {
        console.log("in check 2");
        if (challenged == 1) {
            console.log("in check 3");
            player1_score = player1_score + 1;
            challenged = 2;
            document.getElementById("questionturn").innerHTML = "Question Turn - "+ localStorage.getItem("player1");
            document.getElementById("answerturn").innerHTML = "Answer Turn - "+ localStorage.getItem("player2");
        } else {
            console.log("in check 4");
            player2_score = player2_score + 1;
            challenged = 1;
            document.getElementById("questionturn").innerHTML = "Question Turn - "+ localStorage.getItem("player2");
            document.getElementById("answerturn").innerHTML = "Answer Turn - "+ localStorage.getItem("player1");            
        }
    }
    updateScore();
}

function onload() {
    document.getElementById("questionturn").innerHTML = "Question Turn - "+ localStorage.getItem("player1");
    document.getElementById("answerturn").innerHTML = "Answer Turn - "+ localStorage.getItem("player2");
    document.getElementById("player1_name").innerHTML = localStorage.getItem("player1") + " : ";
    document.getElementById("player2_name").innerHTML = localStorage.getItem("player2") + " : ";
    updateScore();
}

function updateScore() {
    document.getElementById("player1_score").innerHTML = player1_score;
    document.getElementById("player2_score").innerHTML = player2_score;
}