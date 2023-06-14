
/* variablen aan gemaakt met let*/

let playerOne = "X";
let playerTwo = "O";

let playerOneTurn = true;

alert("Welkom bij het spel boter, kaas en eieren. ")

const result = confirm('Bent u ouder dan 18 jaar');
if (result) { //Als je OK klikt
    alert('Je bent oud genoeg');
} else { //als je het er niet mee eens bent
    alert('Je bent niet oud genoeg');
}

/* win combination aangemaakt*/

const winningCombination = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];


/* hier selecteer ik alle box klasse */
/*ik gebruik hier een klik functie */

const boxes = document.querySelectorAll(".box");

for (let i = 0; i < boxes.length; i++) {
    const box = boxes[i];
    // box.textContent = "X";

    box.addEventListener("click", function () {
        boxClicked(i);
    });
}



/* ik maaki hier een function aan voor box clicked door middel van een if */

function boxClicked(boxNumber) {
    //alert("Geklikt op " + boxNumber);

    const box = boxes[boxNumber];

    if (box.textContent == '') {
        if (playerOneTurn == true) {
            box.textContent = playerOne;
        } else {
            box.textContent = playerTwo;
        }
    }


    playerOneTurn = !playerOneTurn;

    checkForWin();
}





function checkForWin() {

    for (let i = 0; i < winningCombination.length; i++) {

        const row = winningCombination[i];

        /* hier worden de combinaties ingevoegd */

        const position_a = row[0];

        const position_b = row[1];

        const position_c = row[2];



        const box_a = boxes[position_a];

        const box_b = boxes[position_b];

        const box_c = boxes[position_c];



        /* hier wordt gecheckt of er een winnende combinatie is */


        if (box_a.textContent == "" || box_b.textContent == "" || box_c.textContent == "") {

            continue;

        }



        else if (box_a.textContent == box_b.textContent && box_b.textContent == box_c.textContent && box_c.textContent == "X") {

            console.log(`spel gewonnen`);

            alert(` gewonnen door ${playerOne}`);

            window.location.href = "index.html"

            stopping = true;

        }



        else if (box_a.textContent == box_b.textContent && box_b.textContent == box_c.textContent && box_c.textContent == "O") {

            console.log(`Winnende Situatie`);

            alert(`gewonnen door ${playerTwo}`);

            window.location.href = "index.html"

            stopping = true;

        }

    }

}

/* hier heb ik een function gebruikt voor restart buttonn  */


const restartButton = document.querySelector(".restart");

restartButton.addEventListener("click", function () {
    playerOneTurn = true;
    for (let i = 0; i < boxes.length; i++) {
        const box = boxes[i];
        box.textContent = '';
    }
});


