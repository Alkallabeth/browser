let queryString = window.location.search;
let urlParams = new URLSearchParams(queryString);
let auth = urlParams.get('auth');
if((!auth) || (auth != "true")){
    window.close();
}

if(document.referrer != "https://alkallabeth.github.io/browser/"){
  window.open("https://classroom.google.com/h","_self");
} else {
    q('#tabs-div').style.display = "inline-block";
}

let tabs = [];
let controlDown = false;
let setShow = false;

class Tab{
    constructor(){
        this.frame = make("iframe","",[],{"src":"https://whitenames.bar/","allowfullscreen":"true"});
        this.tabBtn = make("div","",["tab-btn"],{"innerHTML":"Tab"});
        this.show = this.show.bind(this);
        this.tabBtn.onclick = this.show;
        this.xBtn = make("button","",["x-btn"],{"innerHTML":"x"});
        this.exit = this.exit.bind(this);
        this.xBtn.onclick = this.exit;
        let center = make("center");
        center.appendChild(this.xBtn);
        this.tabBtn.appendChild(center);
        q('#tabs-div').appendChild(this.tabBtn);
        q('#frame-div').appendChild(this.frame);
        this.show();
        tabs.push(this);
    }
    show(){
        tabs.forEach(function(tab){
            tab.hide();
        });
        this.frame.show();
        this.tabBtn.style.backgroundColor = "#b8b8b8";
        q('#settings-div').hide();
        setShow = false;
    }
    hide(){
        this.frame.hide();
        this.tabBtn.style.backgroundColor = "#ededed";
    }
    exit(){
        this.frame.remove();
        this.tabBtn.remove();
        let i = tabs.indexOf(this);
        tabs.remove(i);
    }
}

function newTab(){
    let newTab = new Tab();
}

document.onkeydown = function(e){
    if(e.key == "q"){
        window.close();
    }
    if(e.key == "Tab"){
        e.preventDefault();
        controlDown = true;
    }
    if((e.keyCode > 48) && (e.keyCode < 58)){
        let num = parseInt(e.key);
        try{
            if(controlDown){
                tabs[num-1].show();
            }
        } catch(error){
            
        }
    }
    
}
document.onkeyup = function(e){
    if(e.key == "Tab"){
        controlDown = false;
    }
}

function settings(){
    if(setShow){
        q('#settings-div').hide();
        setShow = false;
        tabs.forEach(function(tab){
            tab.hide();
        });
    } else {
        q('#settings-div').show();
        setShow = true;
        tabs.forEach(function(tab){
            tab.hide();
        });
    }
}

function saveSettings(){
    let title = q('#ttlInp').value;
    if(title.hasValue()){
        document.title = title;
    } else {
        document.title = "Classes";
    }
    let favTxt = q('#favInp').value;
    let linkElem = q('link[rel~="icon"');
    if(favTxt.length > 0){
        linkElem.href = `https://www.google.com/s2/favicons?domain=${favTxt}&sz=32`;
    }
}

const fileInput = q('input[type="file"]');
fileInput.addEventListener("change", (event) => {
  const file = event.target.files[0];
  const reader = new FileReader();

  reader.readAsDataURL(file);

  reader.onload = () => {
    const imageLink = reader.result;
    let linkElem = q('link[rel~="icon"');
    linkElem.href = imageLink;
  };
});
