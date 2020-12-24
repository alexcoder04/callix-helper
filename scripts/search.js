
const searchBtn = document.getElementById("search-btn");
const searchInput = document.getElementById("search-input");

const addResult = (item, resultsBox) => {
  resultsBox.innerHTML += `<p>keywords: ${item.keys},<br> page: <a href='${item.page}.html'>${item.page}</a></p>`;
}

const createResultsBox = () => {
  $("main").html("<div id='results-box'></div>");
  return document.getElementById("results-box");
}

searchBtn.addEventListener("click", () => {
  const searchWord = searchInput.value;

  fetch("../data/index.json")
    .then(resp => resp.json())
    .then(data => {
      var resultsList = [];
      data.searchIndex.forEach(item => {
        if(item.keys.includes(searchWord)){
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

});
