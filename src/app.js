const dropArea = document.getElementById('dropArea');
const fileInput = document.getElementById('fileInput');
let fileURL = 'none';

// ドラッグ&ドロップイベントの処理
dropArea.addEventListener('dragover', (event) => {
  event.preventDefault();
  dropArea.style.backgroundColor = '#f9f9f9';
});

dropArea.addEventListener('dragleave', () => {
  dropArea.style.backgroundColor = 'transparent';
});

dropArea.addEventListener('drop', (event) => {
  event.preventDefault();
  dropArea.style.backgroundColor = 'transparent';
  const file = event.dataTransfer.files[0];
  handleFileSelect(file);
});

// inputタグのファイル選択イベントの処理
fileInput.addEventListener('change', (event) => {
  const file = event.target.files[0];
  handleFileSelect(file);
});

// ファイルが選択された際の処理
function handleFileSelect(file) {
  if (file) {
    fileURL = URL.createObjectURL(file);
  }
}
function test1() {
  if (fileURL == 'none') {
    return;
  }
  document.getElementById('target1').classList.add("targeting");
  document.getElementById('target1').classList.remove("target");
  document.getElementById('trg1').src = fileURL;
  document.getElementById('trg1').hidden = false;
}
document.getElementById('btn1').onclick = test1;

function test2() {
  if (fileURL == 'none') {
    return;
  }
  document.getElementById('target2').classList.add("targeting");
  document.getElementById('target2').classList.remove("target");
  document.getElementById('trg2').src = fileURL;
  document.getElementById('trg2').hidden = false;
}
document.getElementById('btn2').onclick = test2;

function test3() {
  if (fileURL == 'none') {
    return;
  }
  document.getElementById('target3').classList.add("targeting");
  document.getElementById('target3').classList.remove("target");
  document.getElementById('trg3').src = fileURL;
  document.getElementById('trg3').hidden = false;
}
document.getElementById('btn3').onclick = test3;

function test4() {
  if (fileURL == 'none') {
    return;
  }
  document.getElementById('target4').classList.add("targeting");
  document.getElementById('target4').classList.remove("target");
  document.getElementById('trg4').src = fileURL;
  document.getElementById('trg4').hidden = false;
}
document.getElementById('btn4').onclick = test4;


import anime from 'animejs'

let ta, tb, tc, td;
var ani1, ani2, ani3, ani4;

function getRandomUniqueNumber() {
  var numbers = [1, 2, 3, 4];
  var result = [];

  for (var i = 0; i < 4; i++) {
    var randomIndex = Math.floor(Math.random() * numbers.length);
    var randomNumber = numbers.splice(randomIndex, 1)[0];
    result.push(randomNumber);
  }

  var a = result[0];
  var b = result[1];
  var c = result[2];
  var d = result[3];

  ta = '#target' + a;
  tb = '#target' + b;
  tc = '#target' + c;
  td = '#target' + d;


  anime.speed = 0.6;

  ani1 = anime({
    targets: ta,
    translateX: 700,
    easing: 'easeInElastic(1, .6)'
  });
  ani2 = anime({
    targets: tb,
    translateX: 700,
    easing: 'easeOutElastic(1, .6)'
  });
  ani3 = anime({
    targets: tc,
    translateX: 700,
    easing: 'easeInOutElastic(1, .6)'
  });
  ani4 = anime({
    targets: td,
    translateX: 700,
    easing: 'easeOutInElastic(1, .6)'
  });
  document.getElementById('start').hidden = true;
  document.getElementById('restart').hidden = false;
};
document.getElementById('start').addEventListener('click', getRandomUniqueNumber);


document.getElementById('restart').addEventListener('click',function() {
  ani1.seek(0)
  ani2.seek(0)
  ani3.seek(0)
  ani4.seek(0)
  getRandomUniqueNumber()
});