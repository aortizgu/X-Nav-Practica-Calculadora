function calculate() {
    console.log('calculate');
    try {
        $('#ret').text(eval($('#ret').text()));
    } catch (e) {
        alert("Something was wrong (·_·) ");
        delAll();
    }
}

function neg() {
    console.log('neg');
    if (Number.isInteger(parseInt($('#ret').text()))) {
        $('#ret').text(parseFloat($('#ret').text()) * -1.0);
    } else {
        console.log("isnan");
        delAll();
    }
}

function del() {
    console.log('del');
    $('#ret').text($('#ret').text().slice(0, $('#ret').text().length - 1));
}

function delAll() {
    console.log('delAll');
    $('#ret').text('');
}

function putIntoScreen(num) {
    $("#ret").append(num);
}

$(document).ready(
    function() {

        $(".number, .simpleOperator").click(function() {
            putIntoScreen(this.id);
        });

        $(".execOperator").click(function() {
            switch (this.id) {
                case "<-":
                    del();
                    break;
                case "c":
                    delAll();
                    break;
                case "=":
                    calculate();
                    break;
                case "neg":
                    neg();
                    break;
                default:
            }
        });

        window.addEventListener("keydown", function(event) {
            let str = "KeyboardEvent: key='" + event.key + "' | code='" +
                event.code + "'";
            console.log(str);

            if (Number.isInteger(parseInt(event.key)) || event.key == "+" || event.key == "-" || event.key == "*" || event.key == "/") {
                console.log('isa numberrrrr');
                putIntoScreen(event.key);
            } else {
                switch (event.key) {
                    case "Enter":
                        calculate();
                        break;
                    case "Backspace":
                        del();
                        break;
                }
            }

        }, true);

    });
