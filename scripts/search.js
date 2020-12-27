
const searchBtn = document.getElementById("search-btn");
const searchInput = document.getElementById("search-input");

const addResult = (item, resultsBox) => {
  resultsBox.innerHTML += `<div class='search-result'><div>Seite: <a href='${item.page}.html'>${item.name}</a></div><div>Themen: ${item.keys}</div></div>`;
}

const createResultsBox = () => {
  $("main").html("<div id='results-box'></div>");
  return document.getElementById("results-box");
}

const search = () => {
  const searchWord = searchInput.value;

  fetch("../data/index.json")
    .then(resp => resp.json())
    .then(data => {
      var resultsList = [];
      data.searchIndex.forEach(item => {
        if(item.keys.includes(searchWord.toLowerCase())){
          resultsList.push(item)
        }
      });
      resultsBox = createResultsBox();
      if(resultsList.length > 0){

        resultsBox.innerHTML = "<h3>Folgende Seiten könnten dir helfen:</h3>";

        resultsList.forEach(result => {
          addResult(result, resultsBox);
        });
      } else {
        resultsBox.innerHTML = "<h3>Keine Ergebnisse</h3>";
      }
    });
}

searchBtn.addEventListener("click", search);
searchInput.addEventListener("keydown", (e) => {
  if (e.key == "Enter"){
    search();
  }
});
