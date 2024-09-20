var container =document.createElement('div');
container.setAttribute("class","row");
document.body.append(container);
container.style.backgroundImage = "linear-gradient(to right,red,pink,purple,yellow,green)";
function details(n){
    for(var i in n){
        var grid = document.createElement("div");
        grid.setAttribute("class","col-md-3 m-5");

        var data = document.createElement("div");
        data.setAttribute("class","card");
        //data.style.backgroundImage = "linear-gradient(135deg,white,pink)";
        //data.style.border = "4px solid";
        data.style.borderRadius = "10px";

        var flag = document.createElement("img")
        flag.setAttribute("class","img-cover");
        flag.setAttribute("src",n[i].flag);
        flag.style.height = "200px";

        var box = document.createElement("div");
        box.setAttribute("class","card-body");

        var coun = document.createElement("h4")
        coun.innerHTML = n[i].name ;

        var reg = document.createElement("div");
        reg.innerHTML = "Region : " + n[i].region ;

        var cap = document.createElement("div");
        cap.innerHTML = "Capital : " + n[i].capital ;

        var pop = document.createElement("div");
        pop.innerHTML = "Population : " + n[i].population ;

        var button = document.createElement("button");
        button.setAttribute("class","btn-danger");
        button.style.borderRadius = "20px";
        var link = "weather("+n[i].latlng[0]+","+n[i].latlng[1]+")";
        button.setAttribute("onclick",link);
        button.innerHTML = "Weather" ;

        box.append(coun,reg,cap,pop,button)
        data.append(flag,box);
        grid.append(data)
        container.append(grid);
    }
}
var data = fetch(' https://restcountries.com/v3.1/all').then(function(result){return result.json()}).then(function(res){details(res)});
function weather(a,b){
    var s = "https://api.openweathermap.org/data/2.5/weather?lat="+a+"&lon="+b+"&appid=e20da1eaa286ee1abfb8ed669935bdb8";
    fetch(s).then(function(data){return data.json();}).then(function(res){alert("Weather : " +JSON.stringify(res.main));})
}