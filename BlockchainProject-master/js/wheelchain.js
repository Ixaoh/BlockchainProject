var xhttp = new XMLHttpRequest();
var url = "http://172.18.0.2:7050/chaincode";

function addNewCar (id, brand, type, engine, year) {
	xhttp.open("POST", url, true);
//	xhttp.setRequestHeader("Content-Type", "application/json");
//	xhttp.setRequestHeader("X-Custom-Header", "myvalue");
	xhttp.onreadystatechange = getData;


var jsonAddCar = "{\"jsonrpc\": \"2.0\",\"method\": \"invoke\",\"params\": {\"type\": 1,\"chaincodeID\":{\"name\":\"52541fef130b5000172a5ebc72c855dcd5adc850ed32fede135ae5a9764b1a8a823cb58a0d4fa7baf3549787fc72ea5c50983c860c3255c0c515c760138c4ba4\"},\"ctorMsg\": {\"function\":\"createCar\",\"args\":[\"" + id + "\", \""+ brand + "\", \""+ type +"\", \""+ engine + "\", \""+ year +"\"]}},\"id\": 6}"
	xhttp.send(jsonAddCar);

	console.log("Adding new car...");
}

function getData () {
	console.log(xhttp.status);
	if (xhttp.status == 200) {
		if (xhttp.readyState == 4) {
			var serverResponse = JSON.parse(xhttp.responseText);
			console.log(serverResponse);
			console.log("test");
		}
	}
}

function addNewMaintenance(car_id, garage, type, date, km, description)
{
	xhttp.open("POST", url, true);
	xhttp.onreadystatechange = getData;

	var jsonAddMaintenance = "";

	xhttp.send(jsonAddMaintenance);
	console.log("Adding maintenance...");
}
