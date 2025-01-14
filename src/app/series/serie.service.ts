import { Injectable } from '@angular/core';
import { of } from 'rxjs';  // Importa 'of' de RxJS

@Injectable({
  providedIn: 'root'
})
export class SerieService {

  constructor() { }

  getSeries() {
    // Envuelve el array con 'of' para devolver un Observable
    return of([
      {
        "id": 1,
        "name": "Breaking Bad",
        "channel": "AMC",
        "seasons": 5,
        "description": "Set and filmed in Albuquerque, New Mexico, the series tells the story of Walter White...",
        "webpage": "https://www.amc.com/shows/breaking-bad",
        "poster": "https://i.imgur.com/GGje0vc.jpg"
      },
      {
        "id": 2,
        "name": "Orange Is the New Black",
        "channel": "Netflix",
        "seasons": 6,
        "description": "The series begins revolving around Piper Chapman, a woman in her thirties...",
        "webpage": "https://www.netflix.com/co/title/70242311",
        "poster": "https://i.imgur.com/EvKe48G.jpg"
      },
      {
        "id": 3,
        "name": "Game of Thrones",
        "channel": "HBO",
        "seasons": 7,
        "description": "American fantasy drama",
        "webpage": "https://www.hbo.com/game-of-thrones",
        "poster": "https://i.imgur.com/TDCEV1S.jpg"
      },
      {
        "id": 4,
        "name": "The Big Bang Theory",
        "channel": "CBS",
        "seasons": 12,
        "description": "Leonard and Sheldon are brilliant physicists—geniuses in the laboratory...",
        "webpage": "https://www.cbs.com/shows/big_bang_theory/about/",
        "poster": "https://i.imgur.com/uAEpVWk.jpg"
      },
      {
        "id": 5,
        "name": "Sherlock",
        "channel": "BBC",
        "seasons": 4,
        "description": "Sherlock depicts consulting detective Sherlock Holmes solving various mysteries...",
        "webpage": "https://www.bbc.co.uk/programmes/b018ttws",
        "poster": "https://i.imgur.com/02B7qhj.jpg"
      },
      {
        "id": 6,
        "name": "A Very English Scandal",
        "channel": "BBC",
        "seasons": 2,
        "description": "A Very English Scandal is a fact-based three-part British television comedy-drama...",
        "webpage": "https://www.bbc.co.uk/programmes/p065smy4",
        "poster": "https://i.imgur.com/D4y3DrQ.jpg"
      }
    ]);
  }
}



