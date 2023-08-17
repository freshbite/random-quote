const searchBtn = document.getElementById("Cauta");
let res = document.getElementById("result");
let aut = document.getElementById("autori");
const cent = document.body;
var i = 0;

let getQuotes = () => {

    var colorArray = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
    '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
    '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
    '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
    '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
    '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
    '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
    '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
    '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
    '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];

    var category = 'happiness'
    let options = {
        method: 'GET',
        headers: { 'x-api-key': '9kDIo8gL1HCsqbnv5OMzng==KvJSveNQwptN5PZc' }
    }

    let url = "https://api.api-ninjas.com/v1/quotes?category=" + category;
    fetch(url,options)
         .then(function(response) {
         return response.json();
     })
         .then(function(data) {
         console.log("Data",data);

        //const author = `${data[i].author}`;
        //const myArray = author.split(",");
        //console.log("MyArray", myArray);

        res.innerHTML = `<strong>" ${data[0].quote} "</strong>`;
        aut.innerHTML = `<strong>- ${data[0].author}</strong>`;
        cent.style.backgroundColor = colorArray[i];
        searchBtn.style.backgroundColor = colorArray[i];
    });
  i++;
}

getQuotes();
searchBtn.addEventListener("click", getQuotes);
