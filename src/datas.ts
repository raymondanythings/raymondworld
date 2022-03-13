import { atom, selector } from "recoil";

enum skillType {
  fe = "Front-end",
  be = "Back-end",
  etc = "ETC",
}

type skills =
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
  | "ES6"
  | "React-Native"
  | "Firebase";

interface Iskills {
  skills?: Array<skills>;
}
export interface IVideos extends Iskills {
  id: number;
  title: string;
  path: string;
  url?: string;
  description?: string;
}

export interface IWebVideos extends IVideos {
  url: string;
}

export interface ISkillsState {
  id: number;
  name: string;
  type: skillType;
  level: number;
  description: string;
}

export const webState = atom<IWebVideos[]>({
  key: "webState",
  default: [
    {
      id: 0,
      title: "Nomflix",
      path: "nomflix.webm",
      url: "https://raymondanythings.github.io/Nomflix/",
      description:
        "리액트, 리액트쿼리, 타입스크립트, 애니매이션을 활용한 넷플릭스 클론입니다.",
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
      url: "https://raymondjobhub.herokuapp.com/",
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
      skills: [
        "React",
        "Recoil",
        "React-dnd",
        "Typescript",
        "Styled-components",
      ],
    },
    {
      id: 6,
      title: "Zoom Clone",
      path: "zoom-web.webm",
      url: "https://raymondnoom.herokuapp.com/",
      skills: ["WebRTC", "SocketIo", "Express", "NodeJs", "Pug"],
    },
    {
      id: 7,
      title: "Nwitter",
      path: "nwitter-web.webm",
      url: "https://raymondanythings.github.io/nwitter/",
      skills: ["React", "Firebase"],
    },
  ],
});

export const appVideos: IVideos[] = [
  {
    id: 10,
    title: "Movie App",
    path: "imdb-app.webm",
  },
  {
    id: 11,
    title: "Crypto App",
    path: "crypto-app.webm",
  },
];

export const etcVideos: IVideos[] = [
  {
    id: 20,
    title: "인공지능기반 자율주행RC카",
    path: "harber.webm",
  },
  {
    id: 21,
    title: "Py2Jam",
    path: "py2jam.webm",
  },
];

export const skillsState = atom<ISkillsState[]>({
  key: "skillState",
  default: [
    {
      id: 30,
      type: skillType.fe,
      name: "React",
      level: 5,
      description: "",
    },
    {
      id: 31,
      type: skillType.be,
      name: "Nodejs",
      level: 4,
      description: "",
    },
    {
      id: 32,
      type: skillType.fe,
      name: "Redux",
      level: 3,
      description: "",
    },
    {
      id: 33,
      type: skillType.etc,
      name: "Ubuntu",
      level: 2,
      description: "",
    },
    {
      id: 34,
      type: skillType.etc,
      name: "Docker",
      level: 3,
      description: "",
    },
    {
      id: 35,
      type: skillType.be,
      name: "MongoDB",
      level: 3,
      description: "",
    },
    {
      id: 36,
      type: skillType.fe,
      name: "ES6",
      level: 5,
      description: "",
    },
    {
      id: 37,
      type: skillType.etc,
      name: "Python",
      level: 4,
      description: "",
    },
    {
      id: 38,
      type: skillType.fe,
      name: "Typescript",
      level: 4,
      description: "",
    },
    {
      id: 39,
      type: skillType.be,
      name: "Flask",
      level: 3,
      description: "",
    },
    {
      id: 40,
      type: skillType.fe,
      name: "Recoil",
      level: 3,
      description: "",
    },
    {
      id: 41,
      type: skillType.fe,
      name: "React-Native",
      level: 3,
      description: "",
    },
  ],
});

function nameSort(a: ISkillsState, b: ISkillsState): number {
  const nameA = a.name.toUpperCase();
  const nameB = b.name.toUpperCase();
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
  return 0;
}

export const frontSkillState = selector({
  key: "frontSkillState",
  get: ({ get }) => {
    const data = get(skillsState);
    const filteredData = data.filter((m) => m.type === skillType.fe);
    return filteredData.sort(nameSort);
  },
});
export const backSkillState = selector({
  key: "backSkillState",
  get: ({ get }) => {
    const data = get(skillsState);
    const filteredData = data.filter((m) => m.type === skillType.be);
    return filteredData.sort(nameSort);
  },
});
export const etcSkillState = selector({
  key: "etcSkillState",
  get: ({ get }) => {
    const data = get(skillsState);
    const filteredData = data.filter((m) => m.type === skillType.etc);
    return filteredData.sort(nameSort);
  },
});
