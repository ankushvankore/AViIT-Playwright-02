let user1 = {
    uName: 'Swati',
    uId: 101
}
console.log(user1);

let objectToJson = JSON.stringify(user1);
console.log(objectToJson);
console.log(typeof objectToJson);


let JSONbject = `{
    "id": "1",
    "name": "Google Pixel 6 Pro",
    "data": {
      "color": "Cloudy White",
      "capacity": "128 GB"
    }
  }`
    


let JSObject = JSON.parse(JSONbject);
console.log(JSObject);
console.log(typeof JSObject);
