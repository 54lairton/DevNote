const theme = document.getElementById("mode-theme");
const title_page = document.getElementById("page-title");
const textInput = [...document.querySelectorAll(".input")];
const how = document.getElementById('how');
const saved = document.getElementById('saved');
const create = document.getElementById('create-steps');
const createTitle = document.getElementById('create-title');
const steps = document.getElementById('steps');

const valueSteps = document.getElementById("add-steps-text");
const valueTitle = document.getElementById("add-title-steps-text");

const title_list = [...document.querySelectorAll(".title-list")];

var array=[];
var array_2=[];
var color;
window.onload = ()=>{
    if(window.localStorage.TitleSteps){
        div = document.createElement("div");
        div.setAttribute('class', classes.list);
        div.setAttribute('id', "list-Type");
        for (i in JSON.parse(window.localStorage.TitleSteps)){
            h1 = document.createElement("h1");
            h1.setAttribute("class", classes.titleList);
            h1.innerHTML = JSON.parse(window.localStorage.TitleSteps)[i]
            div.appendChild(h1);
        }
        steps.appendChild(div);
    }
    if(window.localStorage.Steps){
        div = document.createElement("div");
        div.setAttribute('class', classes.list);
        div.setAttribute('id', "list-Type");
        
        
        
        steps.appendChild(div);
        for(i in JSON.parse(window.localStorage.Steps)){
            input = document.createElement('input')
            input.setAttribute("type", "checkbox");
            input.setAttribute("id", classes.input.id);
            label = document.createElement("label");
            label.innerHTML = JSON.parse(window.localStorage.Steps)[i];
            let div2 = document.createElement("div");
            div2.setAttribute("class", classes.listOptions);
            
            div2.appendChild(input)
            div2.appendChild(label);
            div.appendChild(div2);
        }
    }
    if(window.localStorage.Bg){
        if(window.localStorage.Bg == "black"){
            textInput.map((e)=>{
                e.style.border = "1px solid rgba(255, 255, 255, 0.459)";
                e.style.color = "white";
            })
            window.document.body.style.background = "rgb(25, 25, 25)";
            title_page.style.color = "white";
            window.document.body.style.color = "white";
            how.style.backgroundColor = "black";
            how.style.color = "rgb(158, 208, 208)";
            title_list.map((e)=>{
                e.style.color = "white";
            })
        }
        if(window.localStorage.Bg == "white"){
            textInput.map((e)=>{
                e.style.border = "1px solid rgba(0, 0, 0, 0.459)";
                e.style.color = "black";
            })
            window.document.body.style.background = "rgb(255, 255, 255) !important";
            title_page.style.color = "black";
            window.document.body.style.color = "black !important";
            how.style.backgroundColor = "rgb(252, 252, 252)";
            how.style.color = "darkslategrey";
            title_list.map((e)=>{
                e.style.color = "black";
            })
        }

    }
}

theme.addEventListener("click", ()=>{
    if(theme.innerHTML == "🌞"){
        saved.style.display = "block";
        color = "black";
        theme.innerHTML = "🌙";
        theme.title = "Theme Dark";
        window.document.body.style.background = "rgb(25, 25, 25)";
        title_page.style.color = "white";
        window.document.body.style.color = "white";

        how.style.backgroundColor = "black";
        how.style.color = "rgb(158, 208, 208)";
        textInput.map((e)=>{
            e.style.border = "1px solid rgba(255, 255, 255, 0.459)";
            e.style.color = "white";
        })

    }
    else if(theme.innerHTML == "🌙"){
        saved.style.display = "block";
        color = "white";
        theme.innerHTML = "🌞";
        textInput.map((e)=>{
            e.style.border = "1px solid rgba(0, 0, 0, 0.459)";
            e.style.color = "black";
        })
        theme.title = "Theme Light";
        window.document.body.style.background = "rgb(255, 255, 255)";
        window.document.body.style.color = "black";
        how.style.backgroundColor = "rgb(252, 252, 252) ";
        how.style.color = "darkslategrey";

    }
    window.localStorage.setItem("Bg",color);
    setTimeout(()=>{
        saved.style.display = "none";
    },2000)
})

const messageError = document.getElementById("error-input");

const classes = {
    list: "list",
    titleList: "title-list",
    listOptions: "list-options",
    input:  {

        id: "check"
    }
}
var div, h1, input, label;
createTitle.addEventListener("click", ()=>{
    var title = valueTitle.value;
    array.push(title);
    window.localStorage.setItem("TitleSteps", JSON.stringify(array));
    if(!valueTitle.value){
        messageError.style.display = 'block';
        messageError.innerHTML = "Please add a title to the text box to create";
        setTimeout(()=>{
            messageError.style.display = "none";
        },5000)
    }else{
        Title();
        valueTitle.value = '';
    }
})
create.addEventListener("click", ()=>{
    array_2.push(valueSteps.value)
    window.localStorage.setItem("Steps",JSON.stringify(array_2));
    if(!valueSteps.value){
        messageError.style.display = 'block';
        messageError.innerHTML = "Please add text in the text box to create the steps";
        setTimeout(()=>{
            messageError.style.display = "none";
        },5000)
    }else{
        Steps();
        valueSteps.value = '';
    }
})

function Title(){
    div = document.createElement("div");
    div.setAttribute('class', classes.list);
    div.setAttribute('id', "list-Type");
    h1 = document.createElement("h1");
    h1.setAttribute("class", classes.titleList);
    h1.innerHTML = valueTitle.value;
    div.appendChild(h1);
    steps.appendChild(div);
}

function Steps(){
    div = document.createElement("div");
    div.setAttribute('class', classes.list);
    div.setAttribute('id', "list-Type");

    label = document.createElement("label");
    let div2 = document.createElement("div");
    div2.setAttribute("class", classes.listOptions);

    input = document.createElement('input')
    
    input.setAttribute("type", "checkbox");
    input.setAttribute("id", classes.input.id);
    label.innerHTML = valueSteps.value;
    steps.appendChild(div);
    div.appendChild(div2);
    div2.appendChild(input)
    div2.appendChild(label);
}
