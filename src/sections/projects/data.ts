import memoizePreview from "../../assets/projects/memoize/preview1.png";
import memoizeIcon from "../../assets/projects/memoize/memoize-icon.ico";

import talkboxPreview from "../../assets/projects/talkbox/preview2.png";

export const projects = {
  memoize: {
    title: "Memoize",
    link: "#memoize",
    desc: "Memoize is a web app to organize your tasks and reminders. Create, label, drag-and-drop your todos to your liking.",
    img: memoizePreview,
    icon: memoizeIcon,
    repoUrl: "https://github.com/jamesyjh/todo-memos-vite",
    demoUrl: "https://todo-memos-vite.vercel.app",
    badges: ["React", "TypeScript", "Vite", "CSS"],
  },
  talkbox: {
    title: "Talkbox",
    link: "#talkbox",
    icon: null,
    desc: "Full stack Slack clone with full functioning chat features. Authenticated via Auth0 API.",
    img: talkboxPreview || "https://placehold.co/600x400/png",
    repoUrl: "https://github.com/jamesyjh/talkbox-client",
    badges: [
      "React",
      "Redux",
      "Typescript",
      "Vite",
      "CSS",
      "WebSocket",
      "Express.js",
      "Node.js",
      "Auth0",
      "MongoDB",
      "Nx / Lerna",
    ],
  },
};
