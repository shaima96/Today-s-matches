const buttonSearch = document.getElementById("buttonSearch");

buttonSearch.addEventListener("click", event => {
  event.preventDefault();
  const inputMatch = document.getElementById("searchbar");

  searchRequest(inputMatch.value, (error, matches) => {
    if (error) {
      // alert("Couldn't get data!");
    } else {
      updateMatches(matches.results);
    }
  });
});

var updateMatches = function(matchesList) {
  const listSection = document.getElementById("calendar-league");
  listSection.innerText = null;
  while (listSection.firstChild) {
    listSection.removeChild(listSection.firstChild);
  }

  matchesList.forEach(match => {
    const imageDiv = document.createElement("div");
    imageDiv.setAttribute("class", "calendar-league1");
    const image = document.createElement("img");
    image.setAttribute("src", match.competition.logo.small);
    imageDiv.appendChild(image);
    listSection.appendChild(imageDiv);

    const competitionName = document.createElement("h2");
    competitionName.innerText = match.competition.name;
    competitionName.setAttribute("class", "competitionName");
    listSection.appendChild(competitionName);
    /////////////Team A
    const firstTeamName = document.createElement("p");
    firstTeamName.innerText = match.team_A_name;
    firstTeamName.setAttribute("class", "firstTeamName");
    listSection.appendChild(firstTeamName);

    const firstTeamImg = document.createElement("img");
    firstTeamImg.setAttribute("src", match.team_A_logo);
    firstTeamImg.setAttribute("class", "firstTeamImg");
    listSection.appendChild(firstTeamImg);

    const firstTeamScore = document.createElement("h2");
    firstTeamScore.innerText = match.fs_A;
    firstTeamScore.setAttribute("class", "firstTeamScore");
    listSection.appendChild(firstTeamScore);
    ////////////Team B
    const secondTeamName = document.createElement("p");
    secondTeamName.innerText = match.team_B_name;
    secondTeamName.setAttribute("class", "secondTeamName");
    listSection.appendChild(secondTeamName);

    const secondTeamImg = document.createElement("img");
    secondTeamImg.setAttribute("src", match.team_B_logo);
    secondTeamImg.setAttribute("class", "secondTeamImg");
    listSection.appendChild(secondTeamImg);

    const secondTeamScore = document.createElement("h2");
    secondTeamScore.innerText = match.fs_B;
    secondTeamScore.setAttribute("class", "secondTeamScore");
    listSection.appendChild(secondTeamScore);

    const matchTime = document.createElement("time");
    matchTime.innerText = match.time_utc;
    listSection.appendChild(matchTime);

    imageDiv.appendChild(competitionName);
    imageDiv.appendChild(firstTeamName);
    imageDiv.appendChild(firstTeamImg);
    imageDiv.appendChild(secondTeamName);
    imageDiv.appendChild(secondTeamImg);
    imageDiv.appendChild(firstTeamScore);
    imageDiv.appendChild(secondTeamScore);
    imageDiv.appendChild(matchTime);
  });
};
var arr;
var searchDate = "2020-02-02";
var didMount = () => {
  var yyyy = new Date().getFullYear();
  var mm =
    new Date().getMonth() < 10
      ? "0" + new Date().getMonth()
      : new Date().getMonth();
  var dd =
    new Date().getDate() < 10
      ? "0" + new Date().getDate()
      : new Date().getDate();
  searchRequest(yyyy + "-" + mm + "-" + dd, (err, data) => {
    arr = data.results;
    updateMatches(data.results);
  });
};

didMount();
