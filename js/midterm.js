var user;
var x = 0;
window.onload = function() {
    var forIn = function(deepDataAndEvents) {
        var type = deepDataAndEvents.firstName.substring(0,1).toUpperCase()+deepDataAndEvents.lastName.substring(1);
        var page1 = deepDataAndEvents.lastName.substring(0,1).toUpperCase()+deepDataAndEvents.lastName.substring(1);
        return type +" "+page1;
    };
    var copy = function(deepDataAndEvents) {
        var datas = document.createElement("div");
        var zz = document.createElement("img")
        zz.src = deepDataAndEvents.image;
        datas.appendChild(zz);
        var response = document.createElement("h2");
        response.innerText = forIn(deepDataAndEvents);
        var restore = document.createElement("a");
        restore.href = "mail:" +deepDataAndEvents.email;
        datas.appendChild(response);
        datas.appendChild(restore);
        return datas.innerText;
    };
    var own = function(deepDataAndEvents){
        var result = document.createElement("div");
        var restore = document.createElement("img");
        restore.src = deepDataAndEvents.thumbnail;
        result.appendChild(restore);
        var z2 = document.createElement("a");
        z2.innerText = forIn (deepDataAndEvents);
        z2.href = "mail:" +deepDataAndEvents.email;
        result.appendChild(z2);
        return result;
    };
    var merge = function() {
        document.querySelector("#output1").innerHTML = copy(user[x]);
        x+1;
        if (x > 0) {
            document.querySelector("#showBtn").innerText + "Show NExt";}
        if (user[x - 2]){
            if (document.querySelector(".oldData").length >= 3)
            {document.querySelectorAll(".#output2").removeChild(document.querySelector(".oldData"));
            }
            var zz = document .createElement("div");
            zz.classList.add("oldData");
            zz.appendChild(own(user[x -2]));
            document.querySelector("#output2").appendChild(zz);
        }
    };
    
    var getUrl = function() {
        this.classList.remove("enabled");
        this.classList.add("add");
        this.removeEventListener("click", getUrl);
var req = new XMLHttpRequest()
req.onreadystatechange = function(){
    if( req.readystate == 4){
        if(req.sattus == 200){
        req.open("GET","http://localhost:3000/MidTerm/user.json");
            user = JSON.parse(req.responseText);
        document.querySelector("#showBtn").classList.remove("disabled");
            document.querySelector("#showBtn").classList.add("enabled");
            document.querySelector("#showBtn").addEventListener("click", merge);}
    };
    req.send();};
    docment.querySelector("#loadBtn").addEventListener("click", getUrl);
    