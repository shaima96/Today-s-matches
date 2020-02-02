const buttonSearch = document.getElementById("sbar");

buttonSearch.addEventListener("click", event => {
  event.preventDefault();
  const inputMatch = document.getElementById("match");
  searchRequest(inputMatch.value, (error, matches) => {
    if (error) {
      alert("Couldn't get data!");
    } else {
      console.log(matches);
      updateMatches(matches);
    }
  });
});
