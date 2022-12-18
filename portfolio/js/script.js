// task1
let elem1 = document.getElementById('task1');
elem1.addEventListener('click', f_task1);

function f_task1() {
    var temp = document.getElementsByClassName('inp');
    var sum = 0;
    for (var i = 0; i < temp.length; i++){
        sum += +temp[i].value;
    }
    var temp2 = document.getElementById('result');
    temp2.value = sum;
}

// task2
let elem2 = document.getElementById('task2');
elem2.addEventListener('click', f_task2);

function f_task2() {
    var temp = document.getElementsByClassName('inp2');
    var sum = 0;
    for (var i = 0; i < temp.length; i++){
        sum += +temp[i].value;
    }
    var temp2 = document.getElementById('result2');
    temp2.innerHTML = sum;
}

// task3
let elem3 = document.getElementById('inp3');
elem3.addEventListener('blur', f_task3);

function f_task3() {
    var sum = 0;
    var str = elem3.value;
    var arr = str.split('');
    for (var i = 0; i < arr.length; i++){
        sum += +arr[i];
    }
    var temp2 = document.getElementById('result3');
    temp2.innerHTML = sum;
}

// task4
let elem4 = document.getElementById('inp4');
elem4.addEventListener('blur', f_task4);

function f_task4() {
    var sum = 0;
    var str = elem4.value;
    var arr = str.split(',');
    for (var i = 0; i < arr.length; i++){
        sum += +arr[i];
    }
    var temp2 = document.getElementById('result4');
    temp2.innerHTML = sum/arr.length;
}

// task5
let elem5 = document.getElementById('inp5');
elem5.addEventListener('focus', f_task5_1);
elem5.addEventListener('blur', f_task5_2);

function f_task5_1(){
    elem5.placeholder = '';
}

function f_task5_2() {
    var elem5 = document.getElementById('inp5');
    var elems = document.getElementsByClassName('result');
    if (elem5.value !== 0) {
        var str = elem5.value;
        var arr = str.split(' ');

        for (var i = 0; i < arr.length; i++){
            elems[i].value = arr[i];
        }
    }
    
    if (elem5.value == 0) {
        elem5.placeholder = 'ФИО';
        for (var i = 0; i < elems.length; i++){
            elems[i].value = '';
        }
    }
}

// task6
let elem6 = document.getElementById('inp6');
elem6.addEventListener('blur', f_task6);

function f_task6() {
    var str = elem6.value;
    var arr = str.split(' ');
    for (var i = 0; i < arr.length; i++){
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    elem6.value = arr[0] + ' ' + arr[1] + ' ' + arr[2];
}

// task7
let elem7 = document.getElementById('inp7');
elem7.addEventListener('blur', f_task7);

function f_task7() {
    var str = elem7.value;
    var arr = str.split(' ');
    elem7.value = arr.length;
}

// task8
let elem8 = document.getElementById('inp8');
elem8.addEventListener('blur', f_task8);

function f_task8() {
    var str = elem8.value;
    var arr = str.split(' ');
    for (var i = 0; i < arr.length; i++){
        arr[i] = arr[i].length
    }
    elem8.value = Math.max.apply(null, arr)
}

// task9
let elem9 = document.getElementById('inp9');
elem9.addEventListener('blur', f_task9_1);
elem9.addEventListener('focus', f_task9_2);

function f_task9_2(){
    elem9.value = '';
}

function f_task9_1() {
    if (elem9.value !== 0) {
        var str = elem9.value;
        var arr = str.split('.');
        elem9.value = arr[0] + '-' + arr[1] + '-' + arr[2]
    }
}

// task10
let elem10 = document.getElementById('task10');
elem10.addEventListener('click', f_task10);

function f_task10() {
    var temp = document.getElementById('inp10');
    
    var temp2 = document.getElementById('result10');
    temp2.innerHTML = (2022 - temp.value);
    if (2022 - temp.value < 0){
        var str = 'Вы ещё не родились!!!'
        temp2.innerHTML = str
    }
}

// task11
let elem11 = document.getElementById('btn11');
elem11.addEventListener('click', f_task11);

function f_task11() {
    var temp = document.getElementById('cb11');
    if (temp.checked == false){
        temp.checked = true;
    } else{
        temp.checked = false;
    }
}

// task12
let elem12 = document.getElementById('task12');
elem12.addEventListener('click', f_task12);

function f_task12() {
    let temp = document.getElementsByClassName('cb12');
    for (var i = 0; i < temp.length; i++){
        temp[i].checked = true;
    }
}

// task13
let elem13 = []
elem13[0] = document.getElementById('rb13_1');
elem13[1] = document.getElementById('rb13_2');
elem13[2] = document.getElementById('rb13_3');
elem13[3] = document.getElementById('rb13_4');
for (var i = 0; i < elem13.length; i++){
    elem13[i].addEventListener('click', f_task13);
}
function f_task13() {
    var temp = document.getElementById('result13');
    for (var i = 0; i < elem13.length; i++){
        if (elem13[i].checked == true){
            var str = elem13[i].value;
            temp.innerHTML = str;
        }
    }
}

// task14
let elem14 = document.getElementById('cb14');
elem14.addEventListener('change', f_task14);
function f_task14() {
    var temp = document.getElementById('inp14');
    if (elem14.checked == true){
        temp.style.visibility = 'hidden';
    } else{
        temp.style.visibility = 'visible';
    }
}

// task15
let elem15_1 = document.getElementById('cb15_1');
let elem15_2 = document.getElementById('cb15_2');
elem15_1.addEventListener('change', f_task15_1);
elem15_2.addEventListener('change', f_task15_2);
function f_task15_1() {
    var temp = document.getElementById('result15_1');
    if (elem15_1.checked == true){
        temp.style.visibility = 'hidden';
    } else{
        temp.style.visibility = 'visible';
    }
}

function f_task15_2() {
    var temp = document.getElementById('result15_2');
    if (elem15_2.checked == true){
        temp.style.visibility = 'hidden';
    } else{
        temp.style.visibility = 'visible';
    }
}

// task16
let elem16_1 = document.getElementById('cb16_1');
let elem16_2 = document.getElementById('cb16_2');
let elem16_3 = document.getElementById('cb16_3');
elem16_1.addEventListener('change', f_task16_1);
elem16_2.addEventListener('change', f_task16_2);
elem16_3.addEventListener('change', f_task16_3);
function f_task16_1() {
    var temp = document.getElementById('result16');
    if (elem16_1.checked == true){
        temp.style.textDecoration = 'line-through';
    } else{
        temp.style.textDecoration = 'none';
    }
}

function f_task16_2() {
    var temp = document.getElementById('result16');
    if (elem16_2.checked == true){
        temp.style.fontWeight = 'bold';
    } else{
        temp.style.fontWeight = 'normal';
    }
}

function f_task16_3() {
    var temp = document.getElementById('result16');
    if (elem16_3.checked == true){
        temp.style.color = 'red';
    } else{
        temp.style.color = 'black';
    }
}

// task17
let elem17_1 = document.getElementById('inp17');
let elem17_2 = document.getElementById('ul17');
let elem17_3 = document.getElementById('task17');
elem17_3.addEventListener('click', f_task17);

function f_task17() {
    str = elem17_1.value;
    arr = str.split(',');
    var number = 1;
    arr.forEach(element => {
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(element));
        li.setAttribute("id", "li" + number);
        elem17_2.appendChild(li); 
        number++;
    });
}

// task19
let o1 = document.getElementById('o1');
let o2 = document.getElementById('o2');
let o3 = document.getElementById('o3');
let o4 = document.getElementById('o4');
let o5 = document.getElementById('o5');
let o6 = document.getElementById('o6');
let s2 = document.getElementById('select19_1')
o1.addEventListener('click', f1);
o2.addEventListener('click', f2);
o3.addEventListener('click', f3);

function f1() {
    s2.getElementsByTagName('option');
    alert('qwe');
    for (i = 0; i < s2.length; i++){
        if (i !== 0){
            s2[i].setAttribute('style', 'display:none;');
        } else{
            s2[i].setAttribute('style', 'display:block;');
        }
    }
}
function f2(){
    for (i = 0; i < s2.length; i++){
        if (i !== 1){
            s2[i].setAttribute('style', 'display:none;');
        } else{
            s2[i].setAttribute('style', 'display:block;');
        }
    }
}
function f3(){
    for (i = 0; i < s2.length; i++){
        if (i !== 2){
            s2[i].setAttribute('style', 'display:none;');
        } else{
            s2[i].setAttribute('style', 'display:block;');
        }
    }
}

// task20
let elem20_1 = document.getElementById('select1');
let elem20_2 = document.getElementById('select2');
let elem20_3 = document.getElementById('inp20_1');
elem20_3.addEventListener('focus', f_task20_2);
elem20_3.addEventListener('blur', f_task20);

kurs = [64.88, 1/64.88]

function f_task20() {
    if (elem20_1.value == elem20_2.value){
        if (elem20_2.value == 'Руб'){
            elem20_2.value = '$';
        } else{
            elem20_2.value = 'Руб';
        }
    }
    if (elem20_1.value == '$'){
        var temp = document.getElementById('inp20_2');
        var money = elem20_3.value;
        temp.value = money*kurs[0];
    } else{
        var temp = document.getElementById('inp20_2');
        var money = elem20_3.value;
        temp.value = money*kurs[1];
    }
}

function f_task20_2() {
    var temp = document.getElementById('inp20_2');
    temp.value = '';
}