interface Iskills {
  skills?: Array<
    | "React"
    | "React-query"
    | "Express"
    | "Sass"
    | "Styled-components"
    | "Redux"
    | "Cloudflare"
    | "EC2"
    | "Cloudinary"
    | "Nginx"
    | "Docker"
    | "MongoDB"
    | "NodeJs"
    | "Pug"
    | "Web-assembly"
    | "Ffmpeg"
    | "Webpack"
    | "S3"
    | "Heroku"
    | "Python"
    | "Flask"
    | "Requests"
    | "BS4"
    | "Numpy"
    | "Pandas"
    | "Chartjs"
    | "Recoil"
    | "React-dnd"
    | "Typescript"
    | "WebRTC"
    | "SocketIo"
    | "Framer-motion"
  >;
}
export interface IVideos extends Iskills {
  id: number;
  title: string;
  path: string;
  url?: string;
  description?: string;
}

export const webVideos: IVideos[] = [
  {
    id: 0,
    title: "Netflix Clone",
    path: "nomflix.webm",
    url: "https://raymondanythings.github.io/Nomflix/",
    description: "Netflix Clone using React",
    skills: [
      "React",
      "React-query",
      "Typescript",
      "Framer-motion",
      "Styled-components",
    ],
  },
  {
    id: 1,
    title: "Voyager",
    path: "voyager-web-norack.webm",
    url: "https://voyager.or.kr",
    skills: [
      "React",
      "Express",
      "Sass",
      "Styled-components",
      "Redux",
      "Cloudflare",
      "EC2",
      "Cloudinary",
      "Nginx",
      "Docker",
      "MongoDB",
    ],
  },
  {
    id: 2,
    title: "Youtube Clone",
    path: "wetube-web.webm",
    url: "https://raymondtube.herokuapp.com/",
    skills: [
      "NodeJs",
      "Express",
      "Pug",
      "Web-assembly",
      "Ffmpeg",
      "Sass",
      "MongoDB",
      "Webpack",
      "S3",
      "Heroku",
    ],
  },
  {
    id: 3,
    title: "JobHub",
    path: "jobhub-web.webm",
    url: "https://lastchallenge.raymondanything.repl.co/",
    skills: ["Python", "Flask", "Requests", "BS4"],
  },
  {
    id: 4,
    title: "Apartment-Now",
    path: "apartment-web.webm",
    url: "https://apartmentnow.herokuapp.com/",
    skills: ["Python", "Numpy", "Pandas", "Flask", "Chartjs"],
  },
  {
    id: 5,
    title: "Framer To-Do List",
    path: "kanban-web.webm",
    url: "https://raymondanythings.github.io/React-KanBanApp/",
    skills: ["React", "Recoil", "React-dnd", "Typescript", "Styled-components"],
  },
  {
    id: 6,
    title: "Zoom Clone",
    path: "zoom-web.webm",
    url: "https://raymondnoom.herokuapp.com/",
    skills: ["WebRTC", "SocketIo", "Express", "NodeJs", "Pug"],
  },
];

export const appVideos: IVideos[] = [
  {
    id: 0,
    title: "Movie App",
    path: "imdb-app.webm",
  },
  {
    id: 1,
    title: "Crypto App",
    path: "crypto-app.webm",
  },
];

export const etcVideos: IVideos[] = [
  {
    id: 0,
    title: "인공지능기반 자율주행RC카",
    path: "harber.webm",
  },
  {
    id: 1,
    title: "Py2Jam",
    path: "py2jam.webm",
  },
];
