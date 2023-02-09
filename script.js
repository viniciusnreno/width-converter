function converterS(){
    var width = document.getElementById('widthS');
    var results = document.getElementById('resultsS');

    var arrayOg = width.value.split(" ");
    var arrayConverted = [];
    
    for(var i=0; i<arrayOg.length; i++){
        arrayOg[i] = Math.round((1024 * arrayOg[i])/1346);
        arrayConverted.push(arrayOg[i]);

        var result = document.createElement("h3");
        result.innerHTML = arrayConverted[i] + "px";
        results.appendChild(result)
    }
}

function converterB(){
    var width = document.getElementById('widthB');
    var results = document.getElementById('resultsB');

    var arrayOg = width.value.split(" ");
    var arrayConverted = [];
    
    for(var i=0; i<arrayOg.length; i++){
        arrayOg[i] = Math.round((1260 * arrayOg[i])/1346);
        arrayConverted.push(arrayOg[i]);

        var result = document.createElement("h3");
        result.innerHTML = arrayConverted[i] + "px";
        results.appendChild(result)
    }
}


function converterV(){
    var width = document.getElementById('widthV');
    var results = document.getElementById('resultsV');

    var arrayOg = width.value.split(" ");
    var arrayConverted = [];
    
    for(var i=0; i<arrayOg.length; i++){
        arrayOg[i] = (arrayOg[i]/13.4).toFixed(2);
        arrayConverted.push(arrayOg[i]);

        var result = document.createElement("h3");
        result.innerHTML = arrayConverted[i] + "vw";
        results.appendChild(result)
    }
}


    window.onload = function() {
        var canvas = document.getElementById("post-canvas");
        var img = document.getElementById("post");
        var btn = document.getElementById("btn-post");
        var ctx = canvas.getContext("2d");
        
        canvas.style.letterSpacing = 2.5 + "px";
        ctx.font = "bold 30px Gilroy";
        ctx.fillStyle = "#81BC7F";
        ctx.fillStyle = "bold";
        
        ctx.drawImage(img, 10, 10);
        ctx.fillText("AMIGO 1", 500, 670);
        ctx.fillText("AMIGO 2", 500, 770);
        
        btn.addEventListener('click', function(){
            window.open().document.write('<img src="' + canvas.toDataURL() + '" />');
        });
    };



