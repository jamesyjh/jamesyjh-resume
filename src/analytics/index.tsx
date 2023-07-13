import ReactGA from "react-ga4";

const clickedDownloadResume = () =>
  ReactGA.event({
    action: "download resume",
    category: "navigation",
    label: "view resume",
  });

const gaEvents = {
  eventDownloadResume: clickedDownloadResume,
};

export { gaEvents };
