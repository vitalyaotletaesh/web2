let btn = document.getElementById('calc');
btn.addEventListener('click', calc);

row_id = ['row1', 'row2', 'row3', 'row4', 'row5'];
col_class = ['inp1', 'inp2', 'inp3', 'inp4', 'inp5'];

let row_count = document.getElementById('row_count');
let col_count = document.getElementById('col_count');

col_count.addEventListener('blur', rowcol);

function rowcol(){

    if (row_count.value < 5){
        for(i = row_count.value; i < 5; i++){
            var row = document.getElementById(row_id[i]);
            row.style.display = 'none';
        }
    }

    if (col_count.value < 5){
        for(i = col_count.value; i < 5; i++){
            var cols = document.getElementsByClassName(col_class[i]);
            for (let j = 0; j < cols.length; j++) {
                cols[j].style.display = 'none';
            }
        }
    }
}


function calc(){
    inp_id = ['rc11', 'rc12', 'rc13', 'rc14', 'rc15', 
            'rc21', 'rc22', 'rc23', 'rc24', 'rc25',
            'rc31', 'rc32', 'rc33', 'rc34', 'rc35',
            'rc41', 'rc42', 'rc43', 'rc44', 'rc45',
            'rc51', 'rc52', 'rc53', 'rc54', 'rc55'];
    
    let inp_values = [];
    var index = 0;
    inp_id.forEach(element => {
        temp = document.getElementById(element);
        if(Number(temp.value)){
            inp_values[index] = temp.value;
            index++;
        }
    });
    alert(inp_values);

    if(row_count.value >= 1){
        var row1_values = [];
        for (i = 0; i < row_count.value; i++){
            row1_values[i] = inp_values[i];
        }
    }

    if(row_count.value >= 2){
        index = 0
        var row2_values = [];
        for (i = row_count.value; i < 2*row_count.value; i++){
            row2_values[index] = inp_values[i];
            index++;
        }
    }

    if(row_count.value >= 3){
        index = 0
        var row3_values = [];
        for (i = 2*row_count.value; i < 3*row_count.value; i++){
            row3_values[index] = inp_values[i];
            index++;
        }
    }

    if(row_count.value >= 4){
        index = 0
        var row4_values = [];
        for (i = 3*row_count.value; i < 4*row_count.value; i++){
            row4_values[index] = inp_values[i];
            index++;
        }
    }

    if(row_count.value == 5){
        index = 0
        var row5_values = [];
        for (i = 4*row_count.value; i < 5*row_count.value; i++){
            row5_values[index] = inp_values[i];
            index++;
        }
    }

    let sum_row = [];
    index = 0;
    for (i = 0; i < +row_count.value; i++){
        sum_row[i] = +inp_values.slice(index, index + +row_count.value).reduce((a,b) => +a + +b );
        index += row_count.value;
    }
    alert(sum_row);
}