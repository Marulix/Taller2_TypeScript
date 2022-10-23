import { series } from "./dataseries.js";
var coursesTbody = document.getElementById("series");
var AvgSeasonsElm = document.getElementById("seasons-avg");
renderSeriesInTable(series);
AvgSeasonsElm.innerHTML = "Seasons average: ".concat(getAvgSeasons(series));
function renderSeriesInTable(series) {
    console.log('Desplegando series');
    series.forEach(function (serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td class=\"table-active bolded\">".concat(serie.id, "</td>\n                             <td class=\"table-active blueName \">").concat(serie.name, "</td>\n                             <td class=\"table-active\">").concat(serie.channel, "</td>\n                             <td class=\"table-active\">").concat(serie.seasons, "</td>");
        coursesTbody.appendChild(trElement);
    });
}
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
