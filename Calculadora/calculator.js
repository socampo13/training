function insert (num){
    var calculo = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = calculo + num;
}

function clean (){
    document.getElementById('result').innerHTML = '';
}

function back(){
    var result = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = result.substring(0, result.length - 1);
}

function calculate (){
    var results = document.getElementById('result').innerHTML;
    if(results){
        document.getElementById('result').innerHTML = eval(results);
    } else{
        document.getElementById('result').innerHTML = 'syntax error';
    }
}