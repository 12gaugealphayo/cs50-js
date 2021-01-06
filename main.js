function counter () {
    if(!localStorage.getItem('counter'))
            localStorage.setItem('counter', 0);
        
        //Load current value of counter
        document.addEventListener('DOMContentLoaded', () => {
            document.querySelector('#counter').innerHTML = localStorage.getItem('counter');
            console.log(localStorage.getItem('counter'));
            //Count every button is clicked
            document.querySelector('#button1').onclick = () => {
                //increment current counter
                
//                let counter = Number(localStorage.getItem('counter'));
                let counter = localStorage.getItem('counter');
                counter++;
                localStorage.setItem('counter', counter);
//                let counterNum = Number(counter) + Number(counter);
                document.querySelector('#counter').innerHTML = localStorage.getItem('counter');
            }
            document.querySelector('#button2').onclick = () => {
                localStorage.setItem('counter', 0);
                document.querySelector('#counter').innerHTML = localStorage.getItem('counter');
                
            }
        });
}

counter();