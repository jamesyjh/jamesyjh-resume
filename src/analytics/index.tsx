import ReactGA from "react-ga4";

const clickedDownloadResume = (): void =>
  ReactGA.event({
    action: "download resume",
    category: "navigation",
    label: "view resume",
  });

const navigatedToExternalPage = (dest: string): void =>
  ReactGA.event({
    action: "navigated to ext page",
    category: "navigation",
    label: dest,
  });

const gaEvents = {
  eventDownloadResume: clickedDownloadResume,
  eventExternalNaviation: navigatedToExternalPage,
};

export { gaEvents };
