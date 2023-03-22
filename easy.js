String.prototype.isIn = function(w){
    if(w.indexOf(this) != -1){
        return(true);
    }
    return(false);
}
String.prototype.has = function(w){
    if(this.indexOf(w) != -1){
        return(true);
    }
    return(false);
}
String.prototype.hasValue = function(){
    if(this.length > 0){
        return(true);
    }
    return(false);
}
String.prototype.replace = function(str,what){
    let s = this;
    let w = this.indexOf(str);
    s = s.substring(0,w) + what + s.substring(w+str.length,s.length);
    return(s);
}
String.prototype.replaceAll = function(str,what){
    let s = this;
    while(str.isIn(s)){
        s = s.replace(str,what);
    }
    return(s)
}
Array.prototype.has = function(w){
    if(this.indexOf(w) != -1){
        return(true);
    }
    return(false);
}
Array.prototype.remove = function(index){
    this.splice(index,1);
    return(this);
}
HTMLElement.prototype.hide = function(){
    this.style.display = 'none';
}
HTMLElement.prototype.show = function(){
    this.style.display = 'block';
}
function q(w){
    return(document.querySelector(w));
}
function qA(w){
    return(document.querySelectorAll(w));
}
function getDownloadLink(text){
    return(URL.createObjectURL(new Blob([text], { type: "text/plain" })));
}
function make(type,id='',classes=[],atts={},styles={}){
    let elem = document.createElement(type);
    if(id.hasValue()){
        elem.id = id;
    }
    classes.forEach(function(c){
        elem.classList.add(c);
    })
    for(let a in atts){
        let str = 'elem.'+a+' = ';
        if((typeof a) == 'string'){
            str += '"'+atts[a]+'"';
        } else {
            str += atts[a];
        }
        eval(str);
    }
    for(let s in styles){
        let val = styles[s];
        while('-'.isIn(s)){
            let w = s.indexOf('-') + 1;
            s = s.substring(0,w-1) + s[w].toUpperCase() + s.substring(w+1,s.length);
            s = s.replace('-','');
        }
        let str = 'elem.style.'+s+' = ';
        if((typeof s) == 'string'){
            str += '"'+val+'"';
        } else {
            str += val;
        }
        eval(str);
    }
    return(elem);
}
