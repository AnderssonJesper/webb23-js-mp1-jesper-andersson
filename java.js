//Rows
const hue = 210;
for(let i=1; i<6; i++){
    const p = document.createElement('p');
    document.body.append(p);
    p.innerText = `Rad  ${i}`;
    p.style.fontSize = `${4 + i * 8}px`;
    p.style.color = `hsl(${hue}, 80%, 40%)`;
     const pHue = 130+i*15;
    p.style.backgroundColor = `hsl(${pHue}, 100%, 80%)`;
    document.body.style.textAlign = 'center';

}
document.body.style.textAlign = 'center';


// Middle - Numbers
const topBorder = document.createElement('div');
topBorder.style.position = 'fixed';
topBorder.style.top = '10';
topBorder.style.left = '0';
topBorder.style.width = '5%';
topBorder.style.height = '27%';
topBorder.style.marginLeft = '47%'
topBorder.style.backgroundColor ='#a8a8f0';
document.body.appendChild(topBorder);

const m = document.createElement('m');
m.style.position = 'absolute';
m.style.top = '20px'
m.style.left = '25px'
m.style.color = 'white';
m.style.width = '50%';
m.style.listStyleType = 'none';
m.style.margin = '0';
m.style.padding = '0';
topBorder.appendChild(m);

for (let i = 9; i >= 0; i--) {
  const li = document.createElement('li');
  li.innerText = i;
  if (i === 1 || i === 3 || i === 5 || i === 7 || i === 9) {
    li.style.color = 'black';
    li.style.backgroundColor = 'white';
  } else {
    li.style.color = 'white';
    li.style.backgroundColor = 'black'
  }
    li.style.border = '1px solid #000';

    if (i === 0 || i === 9) {
    li.style.width = '96%';
    li.style.borderTop = '1px solid #000';
    li.style.borderBottom = '1px solid #000';
  }

  if (i === 8){
    li.style.background = '#a8a8f0';
    li.style.border = 'none';
    li.style.color = 'white';

  }

  m.appendChild(li);
}

//Left - Numbers

const leftBorder = document.createElement('div');
leftBorder.style.position = 'fixed';
leftBorder.style.top = '10';
leftBorder.style.left = '10%';
leftBorder.style.width = '5%';
leftBorder.style.height = '27%';
leftBorder.style.backgroundColor ='#a8a8f0';
document.body.appendChild(leftBorder);

const ol = document.createElement ('ol');
ol.style.position = 'absolute';
ol.style.top = '20px';
ol.style.left = '25px';
ol.style.color = 'white';
ol.style.width = '50%' ;
ol.style.listStyleType = 'none';
ol.style.margin = '0';
ol.style.padding = '0';
leftBorder.appendChild(ol);

for (let i = 0; i <= 9; i++) {
  const li = document.createElement('li');
  li.innerText = i;

  if (i === 0 || i === 2 || i === 6 || i === 8) {
    li.style.backgroundColor = 'black';
  } else {
    li.style.color = 'black';
    li.style.backgroundColor = 'white'
  }
  li.style.border = '1px solid #000';
  if (i === 0 || i === 9) {
    li.style.width = '96%';
    li.style.borderTop = '1px solid #000';
    li.style.borderBottom = '1px solid #000';
  }
  if (i === 4){
    li.style.backgroundColor = '#a8a8f0';
    li.style.border = 'none';
    li.style.color = 'white';
  }

  ol.appendChild(li);
}

// Right - Numbers
const rightBorder = document.createElement('div');
rightBorder.style.position = 'fixed';
rightBorder.style.top = '10';
rightBorder.style.right = '10%';
rightBorder.style.width = '5%';
rightBorder.style.height = '27%';

const r = document.createElement ('r');
r.style.position = 'absolute';
r.style.top = '20px';
r.style.left = '25px';
r.style.color = 'white';
r.style.width = '50%' ;
r.style.listStyleType = 'none';
r.style.margin = '0';
r.style.padding = '0';
rightBorder.appendChild(r);

 const numbers = ['ett', 'två', 'tre', 'fyra', 'fem', 'sex', 'sju', 'åtta', 'nio', 'tio'];

for (let i = 0; i < numbers.length; i++) {
  const li = document.createElement('li');
  li.innerText = numbers[i];
 

  if (i === 0 || i === 2 || i === 4 || i === 6 || i === 8) {
    li.style.backgroundColor = 'black';
  } else {
    li.style.backgroundColor = 'white';
    li.style.color = 'black';
  }
   li.style.border = '1px solid #000';

     if (i === 0 || i === 9) {
    li.style.width = '96%';
    li.style.borderTop = '1px solid #000';
    li.style.borderBottom = '1px solid #000';
  }
  if (i === 5){
    li.style.backgroundColor = '#a8a8f0';
    li.style.color = 'black'
    li.style.border = 'none';
  }

  r.appendChild(li);
}

rightBorder.style.backgroundColor ='#a8a8f0';
document.body.appendChild(rightBorder)


