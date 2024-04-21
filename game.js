

function run_win(money,bet,wins){
    var total = money + bet;
    wins++
    
    document.getElementById("money").innerHTML = total;
    document.getElementById("wins").innerHTML = wins;
}

function run_lose(money,bet){
    
    var total = money - bet;
    document.getElementById("money").innerHTML = total;
}

function run_bet() {
    var money = document.getElementById("money").innerHTML;
    var bet = document.getElementById("betamount").value;
    var wins = document.getElementById("wins").innerHTML;
    money = parseInt(money);
    bet = parseInt(bet);
    wins = parseInt(wins);
    if(Number.isInteger(bet)==false){
        alert("Please enter a valid number")
    }
    else{
        if(bet > money){
            alert("You don't have that kind of money!")
        }
        else{
            var num = Math.floor(Math.random() * 2)
            console.log(num)
            
            if (num == 1){
                if (document.getElementById("radio2").checked == true){
                    alert("you win")
                    run_win(money,bet,wins)
                }
                else if (document.getElementById("radio1").checked == true){
                    alert("you lose")
                    run_lose(money,bet)
                }
            }
            else{
                if (document.getElementById("radio1").checked == true){
                    alert("you win")
                    run_win(money,bet,wins)
                }
                else if (document.getElementById("radio2").checked == true){
                    alert("you lose")
                    run_lose(money,bet)
                }
            }
        }
    }
}
var button = document.getElementById("betbtn");
button.addEventListener("click", run_bet);
