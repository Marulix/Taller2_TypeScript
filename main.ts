import { Serie } from "./serie.js";

import { series } from "./dataseries.js";

let coursesTbody: HTMLElement = document.getElementById("series")!;
const AvgSeasonsElm: HTMLElement = document.getElementById("seasons-avg")!;

renderSeriesInTable(series);
AvgSeasonsElm.innerHTML = `Seasons average: ${getAvgSeasons(series)}`

function renderSeriesInTable(series: Serie[]): void {
    console.log('Desplegando series');
    series.forEach((serie) => {
      let trElement = document.createElement("tr");
      trElement.innerHTML = `<td class="table-active bolded">${serie.id}</td>
                             <td class="table-active blueName ">${serie.name}</td>
                             <td class="table-active">${serie.channel}</td>
                             <td class="table-active">${serie.seasons}</td>`;
      coursesTbody.appendChild(trElement);
    });
  }

  function getAvgSeasons(series: Serie[]): number {
    let totalSeasons: number = 0;
    let totalSeries: number = 0;
    series.forEach((serie) => 
    {
    totalSeasons = totalSeasons + serie.seasons;
    totalSeries = totalSeries + 1;
    });
    let avgSeasons: number = totalSeasons/totalSeries;
    return avgSeasons;
  }