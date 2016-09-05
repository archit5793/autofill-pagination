


var objJson = [
    { PaymentId: "1211",OrderDate:"12-8-15",MerchantId:"6781",CustomerEmail:"john@gmail.com",Amount:"2375.98",PaymentStatus:"paid"},
    { PaymentId: "1212",OrderDate:"12-9-15",MerchantId:"6784",CustomerEmail:"suo@gmail.com",Amount:"2245.98",PaymentStatus:"due"},
    { PaymentId: "1213",OrderDate:"11-8-15",MerchantId:"6783",CustomerEmail:"harvey@yahoo.com",Amount:"1345.98",PaymentStatus:"paid"},
    { PaymentId: "1214",OrderDate:"12-8-15",MerchantId:"6781",CustomerEmail:"mike@yahoo.com",Amount:"5345.98",PaymentStatus:"Paid"},
    { PaymentId: "1215",OrderDate:"14-8-15",MerchantId:"6784",CustomerEmail:"rich@hotmail.com",Amount:"6345.98",PaymentStatus:"paid"},
    { PaymentId: "1216",OrderDate:"15-8-15",MerchantId:"6783",CustomerEmail:"dan@yahoo.com",Amount:"2395.98",PaymentStatus:"process"},
    { PaymentId: "1217",OrderDate:"14-9-15",MerchantId:"6781",CustomerEmail:"donna@gmail.com",Amount:"2385.98",PaymentStatus:"due"},
    { PaymentId: "1218",OrderDate:"11-8-15",MerchantId:"6781",CustomerEmail:"summers@hotmail.com",Amount:"2345.98",PaymentStatus:"paid"},
    { PaymentId: "1219",OrderDate:"11-9-15",MerchantId:"6782",CustomerEmail:"dahl@yahoo.com",Amount:"2340.98",PaymentStatus:"process"},
    { PaymentId: "1220",OrderDate:"15-8-15",MerchantId:"6782",CustomerEmail:"stuart@gmail.com",Amount:"2340.98",PaymentStatus:"due"},
    { PaymentId: "1221",OrderDate:"16-8-15",MerchantId:"6787",CustomerEmail:"gab@gmail.com",Amount:"2348.98",PaymentStatus:"due"},
    { PaymentId: "1222",OrderDate:"17-8-15",MerchantId:"6787",CustomerEmail:"joe@yahoo.com",Amount:"2347.98",PaymentStatus:"due"},
    { PaymentId: "1223",OrderDate:"15-8-15",MerchantId:"6781",CustomerEmail:"kitz@gmail.com",Amount:"2365.98",PaymentStatus:"paid"},
    { PaymentId: "1224",OrderDate:"15-8-15",MerchantId:"6787",CustomerEmail:"niks@gmail.com",Amount:"2355.98",PaymentStatus:"process"},
    { PaymentId: "1225",OrderDate:"16-8-15",MerchantId:"6783",CustomerEmail:"andy@hotmail.com",Amount:"4345.98",PaymentStatus:"process"},
    { PaymentId: "1226",OrderDate:"18-9-15",MerchantId:"6784",CustomerEmail:"markus@yahoo.com",Amount:"3345.98",PaymentStatus:"due"},
    { PaymentId: "1227",OrderDate:"12-9-15",MerchantId:"6785",CustomerEmail:"lucy@yahoo.com",Amount:"2325.98",PaymentStatus:"due"},
    { PaymentId: "1228",OrderDate:"14-9-15",MerchantId:"6781",CustomerEmail:"mia@hotmail.com",Amount:"2145.98",PaymentStatus:"paid"}

];

var suggestions = [];
//Reading Objects and removing duplicates from the array
for(var i=0;i<objJson.length;i++){
    suggestions.push(objJson[i].PaymentId);
    suggestions.push(objJson[i].OrderDate);
    suggestions.push(objJson[i].MerchantId);
    suggestions.push(objJson[i].CustomerEmail);
    suggestions.push(objJson[i].Amount);
    suggestions.push(objJson[i].PaymentStatus);
}

var removeDuplicate = function(arr){
    var result = []
    var sort_arr = arr.sort()
    for (var i = 0; i < arr.length; i++) {
        if(arr[ i + 1] !== arr[i] ){
            result.push(arr[i])
        }
    };
    return result
}
suggestions=removeDuplicate(suggestions);

//var suggestions = new Array("Boris", "Bäcker", "Peter", "Test","Bums");
var outp;
var oldins;
var posi = -1;
var words = new Array();
var input;
var key;

//Setting Visibility
function setVisible(visi){
    var x = document.getElementById("shadow");
    var t = document.getElementsByName("text")[0];
    x.style.position = 'absolute';
    x.style.top =  (findPosY(t)+3)+"px";
    x.style.left = (findPosX(t)+2)+"px";
    x.style.visibility = visi;
}

//Initializing and setting Interval
function init(){
    outp = document.getElementById("output");
    window.setInterval("lookAt()", 100);
    setVisible("hidden");
    document.onkeydown = keygetter;
    document.onkeyup = keyHandler;
}

//Getting Position of nodes for X and Y in autocomplete
function findPosX(obj)
{
    var curleft = 0;
    if (obj.offsetParent){
        while (obj.offsetParent){
            curleft += obj.offsetLeft;
            obj = obj.offsetParent;
        }
    }
    else if (obj.x)
        curleft += obj.x;
    return curleft;
}

function findPosY(obj)
{
    var curtop = 0;
    if (obj.offsetParent){
        curtop += obj.offsetHeight;
        while (obj.offsetParent){
            curtop += obj.offsetTop;
            obj = obj.offsetParent;
        }
    }
    else if (obj.y){
        curtop += obj.y;
        curtop += obj.height;
    }
    return curtop;
}

//Lookup table creation
function lookAt(){
    var ins = document.getElementsByName("text")[0].value;
    if (oldins == ins) return;
    else if (posi > -1);
    else if (ins.length > 0){
        words = getWord(ins);
        if (words.length > 0){
            clearOutput();
            for (var i=0;i < words.length; ++i) addWord (words[i]);
            setVisible("visible");
            input = document.getElementsByName("text")[0].value;
        }
        else{
            setVisible("hidden");
            posi = -1;
        }
    }
    else{
        setVisible("hidden");
        posi = -1;
    }
    oldins = ins;
}


//Adding words to the list
function addWord(word){
    var sp = document.createElement("div");
    sp.appendChild(document.createTextNode(word));
    sp.onmouseover = mouseHandler;
    sp.onmouseout = mouseHandlerOut;
    sp.onclick = mouseClick;
    outp.appendChild(sp);
}


function clearOutput(){
    while (outp.hasChildNodes()){
        noten=outp.firstChild;
        outp.removeChild(noten);
    }
    posi = -1;
}

function getWord(beginning){
    var words = new Array();
    for (var i=0;i < suggestions.length; ++i){
        var j = -1;
        var correct = 1;
        while (correct == 1 && ++j < beginning.length){
            if (suggestions[i].charAt(j) != beginning.charAt(j)) correct = 0;
        }
        if (correct == 1) words[words.length] = suggestions[i];
    }
    return words;
}


//Setting Colors and key Handlers
function setColor (_posi, _color, _forg){
    outp.childNodes[_posi].style.background = _color;
    outp.childNodes[_posi].style.color = _forg;
}

function keygetter(event){
    if (!event && window.event) event = window.event;
    if (event) key = event.keyCode;
    else key = event.which;
}

function keyHandler(event){
    if (document.getElementById("shadow").style.visibility == "visible"){
        var textfield = document.getElementsByName("text")[0];
        if (key == 40){ //Key down

            if (words.length > 0 && posi<words.length-1){
                if (posi >=0) setColor(posi, "#fff", "black");
                else input = textfield.value;
                setColor(++posi, "seagreen", "white");
                textfield.value = outp.childNodes[posi].firstChild.nodeValue;
            }
        }
        else if (key == 38){ //Key up
            if (words.length > 0 && posi >= 0){
                if (posi >=1){
                    setColor(posi, "#fff", "black");
                    setColor(--posi, "seagreen", "white");
                    textfield.value = outp.childNodes[posi].firstChild.nodeValue;
                }
                else{
                    setColor(posi, "#fff", "black");
                    textfield.value = input;
                    textfield.focus();
                    posi--;
                }
            }
        }
        else if (key == 27){ // Esc
            textfield.value = input;
            setVisible("hidden");
            posi = -1;
            oldins = input;
        }
        else if (key == 8){ // Backspace
            posi = -1;
            oldins=-1;
        }
    }
}

var mouseHandler=function(){
    for (var i=0; i < words.length; ++i)
        setColor (i, "white", "black");

    this.style.background = "seagreen";
    this.style.color= "white";
}

var mouseHandlerOut=function(){
    this.style.background = "white";
    this.style.color= "black";
}

var mouseClick=function(){
    document.getElementsByName("text")[0].value = this.firstChild.nodeValue;
    setVisible("hidden");
    posi = -1;
    oldins = this.firstChild.nodeValue;
}