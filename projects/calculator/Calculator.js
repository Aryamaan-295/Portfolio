
var recent_click;
var sum = 0;
var pastnum = 0;
var screen = document.getElementById("screen");
//screen.innerHTML = sum;


var decimal = 0;
var past_clicks = [];

function change_style() {
    var theme = document.getElementsByTagName("link")[0];

    if (theme.getAttribute("href") == "Calculator.css") {
        theme.setAttribute("href" , "Calculator_Dark.css");
    }
    else {
        theme.setAttribute("href" , "Calculator.css");    
    }
}



function reply_click(clicked_id) {
    recent_click = clicked_id;
    Calculate();
    
}

Number.prototype.countDecimals = function () {

    if (Math.floor(this.valueOf()) === this.valueOf()) return 0;

    var str = this.toString();
    if (str.indexOf(".") !== -1 && str.indexOf("-") !== -1) {
        return str.split("-")[1] || 0;
    } else if (str.indexOf(".") !== -1) {
        return str.split(".")[1].length || 0;
    }
    return str.split("-")[1] || 0;
}

window.addEventListener("keydown", function (event) {
    if (event.defaultPrevented) {
      return; // Do nothing if the event was already processed
    }
    if (length < 15) {
        switch (event.key) {

            case "0":
                recent_click = 0;
                Calculate();
                break;

            case "1":
                recent_click = 1;
                Calculate();
                break;

            case "2":
                recent_click = 2;
                Calculate();
                break;

            case "3":
                recent_click = 3;
                Calculate();
                break;

            case "4":
                recent_click = 4;
                Calculate();
                break;

            case "5":
                recent_click = 5;
                Calculate();
                break;

            case "6":
                recent_click = 6;
                Calculate();
                break;

            case "7":
                recent_click = 7;
                Calculate();
                break;

            case "8":
                recent_click = 8;
                Calculate();
                break;

            case "9":
                recent_click = 9;
                Calculate();
                break;


            case "Enter":
                recent_click = "=";
                Calculate();
                break;

            case "+":
                recent_click = "+";
                Calculate();
                break;

            case "-":
                recent_click = "-";
                Calculate();
                break;

            case "*":
                recent_click = "*";
                Calculate();
                break;

            case "/":
                recent_click = "/";
                Calculate();
                break;

            case "%":
                recent_click = "%";
                Calculate();
                break;
                
            case "c":
                recent_click = "C";
                Calculate();
                break;
            
            case "d":
                console.log("Deleted");
                recent_click = "D";
                Calculate();
                break;

            case ".":
                recent_click = ".";
                Calculate();
            default:
              return; // Quit when this doesn't handle the key event.
            }
    }

    else {
        alert("Out of Range");
    }
    
    event.preventDefault();
}, true);



function Calculate() {


    var text = sum.toString();
    var length = text.length; 
    
    var click_num = past_clicks.length;

    if (recent_click == "C") {
        pastnum = 0;
        sum = 0;
        length = 0;
        past_clicks = [];
        decimal = 0;
    }

    if (recent_click == "=") {
        decimal = 0;
        past_clicks.push(recent_click);
        if (past_clicks[click_num-1] == "+") {
            sum = sum + pastnum;
            pastnum = 0;
        }

        if (past_clicks[click_num-1] == "-") {
            sum = pastnum - sum;
            pastnum = 0;
        }
        if (past_clicks[click_num-1] == "*") {
            sum = pastnum*sum;
            pastnum = 0;
        }
        if (past_clicks[click_num-1] == "/") {
            sum = (pastnum/sum);
            pastnum = 0;
        }
    }

    if (recent_click == "+") {
        decimal = 0;
        pastnum = pastnum + sum;
        sum = 0;
        past_clicks.push(recent_click);

    }

    if (recent_click == "-") {
        decimal = 0;
        pastnum = sum;
        sum = pastnum - sum;
        past_clicks.push(recent_click);
    }

    if (recent_click == "*") {
        decimal = 0;
        pastnum = sum;
        sum = 0;
        past_clicks.push(recent_click);
    }

    if (recent_click == "/") {
        decimal = 0;
        pastnum = sum;
        sum = 0;
        past_clicks.push(recent_click);
    }

    if (recent_click == "%") {
        decimal = 0;
        sum = sum/100;
    }

    if (recent_click == ".") {
        decimal = 1;
    }

    if (recent_click == "D") {
        if (decimal != 1) {
            sum = sum/10;
            sum = Math.round(sum-0.5);
        }
    }
    if (length < 15) {
        var decs = sum.countDecimals();
        var div = Math.pow(10,decs+1)

        if (decimal != 1) {
            if (recent_click == 1) {
                sum = (sum*10)+1;
            }
            if (recent_click == 2) {
                sum = (sum*10)+2;
            }
            if (recent_click == 3) {
                sum = (sum*10)+3;
            }
            if (recent_click == 4) {
                sum = (sum*10)+4;
            }
            if (recent_click == 5) {
                sum = (sum*10)+5;
            }
            if (recent_click == 6) {
                sum = (sum*10)+6;
            }
            if (recent_click == 7) {
                sum = (sum*10)+7;
            }
            if (recent_click == 8) {
                sum = (sum*10)+8;
            }
            if (recent_click == 9) {
                sum = (sum*10)+9;
            }
            if (recent_click == 0) {
                sum = sum*10;
            }                
        }

        if (decimal == 1) {
            if (recent_click == 1) {
                sum = sum + (1/div);
            }
            if (recent_click == 2) {
                sum = sum + (2/div);
            }
            if (recent_click == 3) {
                sum = sum + (3/div);
            }
            if (recent_click == 4) {
                sum = sum + (4/div);
            }
            if (recent_click == 5) {
                sum = sum + (5/div);
            }
            if (recent_click == 6) {
                sum = sum + (6/div);
            }
            if (recent_click == 7) {
                sum = sum + (7/div);
            }
            if (recent_click == 8) {
                sum = sum + (8/div);
            }
            if (recent_click == 9) {
                sum = sum + (9/div);
            }
            if (recent_click == 0) {
                div = div+1;
            }
    
        }
    }

    else {
        alert("Out of Range");
        sum = 0;
    }


    screen.innerHTML = sum;   

}




