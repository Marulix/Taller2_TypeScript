import { dataSeries } from "./dataseries.js";
var coursesTbody = document.getElementById("series");
var AvgSeasonsElm = document.getElementById("seasons-avg");
var serieCard = document.getElementById("card");
renderSeriesInTable(dataSeries);
AvgSeasonsElm.innerHTML = "Seasons average: ".concat(getAvgSeasons(dataSeries));
function renderSeriesInTable(series) {
    console.log('Desplegando series');
    series.forEach(function (serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td class=\"table-active bolded\">".concat(serie.id, "</td>\n                             <td class=\"table-active\"><a href=\"#\" class=\"stretched-link\" id=\"serie ").concat(serie.id, "\">").concat(serie.name, "</a></td>\n                             <td class=\"table-active\">").concat(serie.channel, "</td>\n                             <td class=\"table-active\">").concat(serie.seasons, "</td>");
        coursesTbody.appendChild(trElement);
    });
}
var serie1 = document.getElementById("serie 1");
var serie2 = document.getElementById("serie 2");
var serie3 = document.getElementById("serie 3");
var serie4 = document.getElementById("serie 4");
var serie5 = document.getElementById("serie 5");
var serie6 = document.getElementById("serie 6");
serie1.onclick = function () { return showCard(1); };
serie2.onclick = function () { return showCard(2); };
serie3.onclick = function () { return showCard(3); };
serie4.onclick = function () { return showCard(4); };
serie5.onclick = function () { return showCard(5); };
serie6.onclick = function () { return showCard(6); };
function getAvgSeasons(series) {
    var totalSeasons = 0;
    var totalSeries = 0;
    series.forEach(function (serie) {
        totalSeasons = totalSeasons + serie.seasons;
        totalSeries = totalSeries + 1;
    });
    var avgSeasons = totalSeasons / totalSeries;
    return avgSeasons;
}
function clearCard() {
    while (serieCard.hasChildNodes()) {
        if (serieCard.firstChild != null) {
            serieCard.removeChild(serieCard.firstChild);
        }
    }
}
function searchSerieById(idKey, series) {
    return idKey === 0 ? dataSeries : series.filter(function (s) {
        return s.id == idKey;
    });
}
function showCard(id) {
    clearCard();
    var series = searchSerieById(id, dataSeries);
    series.forEach(function (serie) {
        var cardElement = document.createElement("card");
        cardElement.innerHTML = "<img src= \"./img/".concat(serie.id, ".jpg\" class=\"card-img-top\">\n                              <div class=\"card-body\">\n                              <h5 class=\"card-title\">").concat(serie.name, "</h5>\n                              <p class=\"card-text\">").concat(serie.description, "</p>\n                              <a href=").concat(serie.link, ">").concat(serie.link, "</a>");
        serieCard.appendChild(cardElement);
    });
}
