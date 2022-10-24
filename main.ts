import { Serie } from "./serie.js";

import { dataSeries } from "./dataseries.js";

const coursesTbody: HTMLElement = document.getElementById("series")!;
const AvgSeasonsElm: HTMLElement = document.getElementById("seasons-avg")!;
let serieCard: HTMLElement = document.getElementById("card")!;


renderSeriesInTable(dataSeries);
AvgSeasonsElm.innerHTML = `Seasons average: ${getAvgSeasons(dataSeries)}`

function renderSeriesInTable(series: Serie[]): void {
    console.log('Desplegando series');
    series.forEach((serie) => {
      let trElement = document.createElement("tr");
      trElement.innerHTML = `<td class="table-active bolded">${serie.id}</td>
                             <td class="table-active"><a href="#" class="stretched-link" id="serie ${serie.id}">${serie.name}</a></td>
                             <td class="table-active">${serie.channel}</td>
                             <td class="table-active">${serie.seasons}</td>`;
      coursesTbody.appendChild(trElement);
    });
  }

  const serie1: HTMLElement = document.getElementById("serie 1")!;
  const serie2: HTMLElement = document.getElementById("serie 2")!;
  const serie3: HTMLElement = document.getElementById("serie 3")!;
  const serie4: HTMLElement = document.getElementById("serie 4")!;
  const serie5: HTMLElement = document.getElementById("serie 5")!;
  const serie6: HTMLElement = document.getElementById("serie 6")!;
  serie1.onclick = () => showCard(1);
  serie2.onclick = () => showCard(2);
  serie3.onclick = () => showCard(3);
  serie4.onclick = () => showCard(4);
  serie5.onclick = () => showCard(5);
  serie6.onclick = () => showCard(6);

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

  function clearCard() {
    while (serieCard.hasChildNodes()) {
      if (serieCard.firstChild != null) {
        serieCard.removeChild(serieCard.firstChild);
       
      }
    }
  }

  function searchSerieById(idKey: number, series: Serie[]) {
    return idKey === 0 ? dataSeries : series.filter( s => 
      s.id == idKey);
  }

  function showCard(id: number) { 
    clearCard();
    let series: Serie[] = searchSerieById(id, dataSeries);
    series.forEach((serie) => {
      let cardElement = document.createElement("card");
      cardElement.innerHTML = `<img src= "./img/${serie.id}.jpg" class="card-img-top">
                              <div class="card-body">
                              <h5 class="card-title">${serie.name}</h5>
                              <p class="card-text">${serie.description}</p>
                              <a href=${serie.link}>${serie.link}</a>`;
      serieCard.appendChild(cardElement);
    });
    
  }