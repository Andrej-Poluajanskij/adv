 
let readFile = (file, callback) => {
    let rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}


readFile('file:///C:/Users/Andrej/Desktop/adv/data%20.json', (text) => {
    var data = JSON.parse(text);
 
    let table = document.querySelector('table')
    table.innerHTML = ` <tr> <td>${data.name} ${data.size} </td> </tr>
                        <tr> <td>${data.name} - ${data.nodes[0].name} ${data.nodes[0].size} </td> </tr>
                        <tr> <td>${data.name} - ${data.nodes[0].name} - ${data.nodes[0].nodes[0].name} ${data.nodes[0].nodes[0].size}  </td> </tr>
                        <tr> <td>${data.name} - ${data.nodes[0].name} - ${data.nodes[0].nodes[0].name} - ${data.nodes[0].nodes[0].nodes[0].name}  ${data.nodes[0].nodes[0].nodes[0].size} </td> </tr>
                        <tr> <td>${data.name} - ${data.nodes[0].name} - ${data.nodes[0].nodes[1].name} ${data.nodes[0].nodes[1].size} </td> </tr>
                        <tr> <td>${data.name} - ${data.nodes[1].name} ${data.nodes[1].size} </td> </tr>`
});

 
