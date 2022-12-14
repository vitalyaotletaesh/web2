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