

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

//Linearly Searching and displaying
function search(){
    var txt=document.getElementById("searchtext").value;
    if(txt!=0) {
        var searchwindow = window.open(" ", "Search Results");

        searchwindow.document.write("<h1>Search Results</h1>");

        for (var i = 0; i < objJson.length; i++) {
            if (txt == objJson[i].PaymentId || txt == objJson[i].PaymentStatus || txt == objJson[i].Amount || txt == objJson[i].OrderDate || txt == objJson[i].CustomerEmail || txt == objJson[i].MerchantId) {


                searchwindow.document.write(objJson[i].PaymentId + "<br>" + objJson[i].OrderDate + "<br>" + objJson[i].MerchantId + "<br>" + objJson[i].CustomerEmail + "<br>" + objJson[i].Amount + "<br>" + objJson[i].PaymentStatus + "<br><br><br><br>");

            }
        }
    }
}
