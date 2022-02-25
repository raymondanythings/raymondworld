interface IVideos {
  id: number;
  title: string;
  path: string;
  url: string;
  description?: string;
}

export const webVideos: IVideos[] = [
  {
    id: 0,
    title: "Netflix Clone",
    path: "nomflix.webm",
    url: "https://raymondanythings.github.io/Nomflix/",
  },
  {
    id: 1,
    title: "Voyager",
    path: "voyager-web-norack.webm",
    url: "https://voyager.or.kr",
  },
  {
    id: 2,
    title: "Youtube Clone",
    path: "wetube-web.webm",
    url: "https://raymondtube.herokuapp.com/",
  },
  {
    id: 3,
    title: "JobHub",
    path: "jobhub-web.webm",
    url: "https://lastchallenge.raymondanything.repl.co/",
  },
  {
    id: 4,
    title: "Apartment-Now",
    path: "apartment-web.webm",
    url: "https://apartmentnow.herokuapp.com/",
  },
  {
    id: 5,
    title: "Framer To-Do List",
    path: "kanban-web.webm",
    url: "https://raymondanythings.github.io/React-KanBanApp/",
  },
  {
    id: 6,
    title: "Zoom Clone",
    path: "zoom-web.webm",
    url: "https://raymondnoom.herokuapp.com/",
  },
];
