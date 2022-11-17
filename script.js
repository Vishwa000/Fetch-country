        var cont=document.createElement("div");
        cont.setAttribute("class","container")
        document.body.append(cont);
        var roww=document.createElement("div");
        roww.setAttribute("class","row");
        cont.append(roww);
        var res=fetch("https://restcountries.com/v2/all").then((data)=>data.json()).then((data1)=>{
            for(var i=0;i<data1.length;i++)
            { 
                var div=document.createElement("div");
                div.setAttribute("class","col-lg-4 col-md-12")
                div.innerHTML=`<div class="card text-white bg-secondary mb-3" style="max-width: 18rem;">
                <h5 class="card-title1">${data1[i].name}</h5>
                <img src="${data1[i].flag}" class="card-img-top" alt="...">
                <div class="card-body divvsb ${data1[i].name}">
                <h5 class="card-title">Capital: ${data1[i].capital}</h5>
                <h5 class="card-title">Region: ${data1[i].region}</h5>
                <h5 class="card-title">Country Code: ${data1[i].cioc}</h5>
             <button class="main" type="button" onclick="restdata('${data1[i].name}',${data1[i].latlng})">Click For Weather</button></h5>
            </div>`;
            roww.append(div)
        }
        }); 

            async function restdata(name,lat,lon){
            try {
            let res=await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=fe2da79b53328bf2d32b62c485b13be4`);
            let res1= await res.json();
            var temp = document.createElement("h5");
            temp.setAttribute("class","card-title2");
            temp.setAttribute("class","card-title2");
            temp.setAttribute("style","text-align:center;");
            temp.innerHTML=`Temparature : ${res1.main.temp}`;
            var body = document.querySelector(`.card-body.${name}`);
            body.querySelector('.main').setAttribute("disabled",true);
            body.append(temp);
            
            } catch (error) {
                console.log(error.message);
            }
            }