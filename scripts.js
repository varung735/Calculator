const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".button");
let a;
let b;
let operator;
//functions

//function to insert value into display
const insertValue = (value) => {
    display.value += value;
}

//function to clear display
const clearDisplay = () => {
    display.value = 0;
}

//function to operate on assigned values
const operation = (a, b, operator) => {
    if(operator == "+"){
        operator = "";
        return a + b;
    }
    else if(operator == "-"){
        operator = "";
        return a - b;
    }
    else if(operator == "*"){
        operator = "";
        return a * b;
    }
    else{
        operator = "";
        return a/b;
    }
}

//function to assign the a variable and operator
const assignA = (id) => {
    a = display.value;
    operator = id;
    display.value = 0;
}

//function to assign the b variable
const assignB = () => {
    b = display.value;
    let c = operation(parseInt(a), parseInt(b), operator);
    display.value = c;
}

//listeners

buttons.forEach((button) => {
    // this condition doesn't apply the click listener on buttons which have "no-listener" class
    if(!button.classList.contains("no-listener")){
        //event listener
        button.addEventListener('click', () => {
            let id = button.getAttribute('id');
            // without this condition 0 will be added with the values that you are inserting in to the display
            // if you try to insert 2, the calci-display will display 02
            if(display.value == 0){
                display.value = null;
            }

            if(id != null){
                insertValue(id);
            }
        });
    }
});

buttons.forEach((button) => {
    // the condition doesn't allows the listener to be applied on AC and "equal-to" or "=" button
    if(button.classList.contains("no-listener") && !button.classList.contains("equal-to") && !button.classList.contains("ac")){
        button.addEventListener('click', () => {
            assignA(button.getAttribute('id'));
        });
    }
});

buttons.forEach((button) => {
    if(button.classList.contains("equal-to")){
        button.addEventListener('click', () => {
            assignB();
        });
    }
});