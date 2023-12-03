const elInput = document.querySelector('#input');
const elBtn = document.querySelector('#btn');
const elSpan = document.querySelector('#span');

// ============================= INPUT START  ============================= //

elInput.style.width = '200px';
elInput.style.outline = 'none';
elInput.style.padding = '15px 10px';
elInput.style.borderRadius = '10px';
elInput.style.border = 'none';
elInput.style.border = '1px solid black';
elInput.style.borderTopRightRadius = '0px';
elInput.style.borderBottomRightRadius = '0px';
elInput.style.borderRight = '0px';

// ============================= INPUT END ============================= //

// ============================= BTN START ============================= //

elBtn.style.position = 'relative';
elBtn.style.top = '0px';
elBtn.style.right = '8px';
elBtn.style.padding = '15px';
elBtn.style.backgroundColor = 'white';
elBtn.style.border = 'none';
elBtn.style.border = '1px solid black';
elBtn.style.borderRadius = '10px';
elBtn.style.borderTopLeftRadius = '0px';
elBtn.style.borderBottomLeftRadius = '0px';
elBtn.style.cursor = 'pointer';

elBtn.addEventListener('click', function(){
    console.log(elInput.value);
    elSpan.textContent = elInput.value;
})

// ============================= BTN END  ============================= //