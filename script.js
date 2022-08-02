function converter1(){
    let width = document.getElementById('width').value;
    let resultText1 = document.getElementById('result1');
    let allResult1 = document.getElementById('allResult1');
    
    var result = (1024 * width)/1346;
    resultText1.innerHTML = Math.round(result);
    navigator.clipboard.writeText(allResult1.textContent);
}

function converter2(){
    let width = document.getElementById('width').value;
    let resultText2 = document.getElementById('result2');
    let allResult2 = document.getElementById('allResult2');

    var result = (1260 * width)/1346;
    resultText2.innerHTML = Math.round(result);
    navigator.clipboard.writeText(allResult2.textContent);
}

