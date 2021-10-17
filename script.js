let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log('Button text is ', buttonText);
        
        if (buttonText == 'AC') {
            screenValue = "";
            screen.value = screenValue;
        }
        else if (buttonText == '=') {
            screen.value = eval(screenValue);
            
        }

        else if(buttonText == 'CE'){
            screen.value = screen.value.slice(0, -1);
            screenValue =screen.value;
            
        }
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }

    })
}

