let btn = document.querySelector('button');
let msg = document.querySelector('#msg');
let inputText = document.querySelector('#inputText');
let h2 = document.querySelector('h2');

/*
        "" and " " are not the same.
        "" is falsy value, has a length of 0
        " " is truthy value, has a length of 1
*/ 

btn.addEventListener('click', function(){
        //you can either use length property to check if input has any lenght in it -> !inputText.value.length
        //OR use the strict equality test for empty string -> ===
        if(inputText.value === ""){                   
                h2.classList.add("show");                            
        }
        else{
                h2.classList.remove("show");  
                h2.classList.add("hide");  
                msg.innerHTML = inputText.value;
                inputText.value = "";
        }

        setTimeout(() => {
                h2.classList.remove("show");
                }, 2000);
})

