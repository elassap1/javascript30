//start create elements and style it
//{

// select body
const body = document.querySelector('body');

// create new div
const div = document.createElement('div');

// add class to div
div.classList.add('creat');

// add id to div
div.setAttribute('id','clock');

// append div element to body
body.appendChild(div);

// select element (id="clock")
const divid = document.getElementById('clock');
console.log(divid);

// call function to create new multi div and append it 
addmultielem(3, 'div', divid ,'hand-', false, 'line');

// call function to create new multi div and append it 
addmultielem(4, 'span', div, 'span-', true, 'number');

//function of create multi element
function addmultielem(size,d='div',append ,caseu , bool,...classArray){
    for (let index = 0; index < size; index++) {
        // create new element type => (d)
        const div1 = document.createElement(d);
        // add multi class to ele
        div1.classList.add(...classArray);
        // add class to element if it not empty
        if(caseu != ''){
        div1.classList.add(`${caseu+index}`);
        }
        // inserte things (text | element | index)
        if (bool == true) {
            div1.innerHTML = index*3 ;
        }
        //append element div1 to divid
        append.appendChild(div1);
    }
}
//  }
//end create element

// move hand of the clock

//{

//select element 
const hand0 = document.querySelector('.hand-0');
const hand1 = document.querySelector('.hand-1');
const hand2 = document.querySelector('.hand-2');

function settime(){
    // get current time
    const now       = new Date();

    const second    = now.getSeconds();
    const seconddeg = ((second / 60) * 360) + 90;
    hand0.style.transform = `rotate(${seconddeg}deg)`;

    const minute    = now.getMinutes();
    const minutedeg = ((minute / 60) * 360) + 90;
    hand1.style.transform = `rotate(${minutedeg}deg)`;

    const hour      = now.getHours();
    const hourdeg   = ((hour / 12  ) * 360) + 90;
    hand2.style.transform = `rotate(${hourdeg}deg)`;

    console.log(`rotet(${minutedeg})`);
}
//call fun every second
setInterval(settime,1000);

//  }

