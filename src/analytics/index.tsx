import ReactGA from "react-ga4";

const clickedDownloadResume = () =>
  ReactGA.event({
    action: "resume download",
    category: "navigation",
  });

const clickedExternalNavigation = (destination: string) =>
  ReactGA.event({
    action: "external navigation",
    category: "navigation",
    label: destination,
  });

const gaEvents = {
  eventDownloadResume: () => clickedDownloadResume(),
  eventExternalNavigation: (destination: string) => clickedExternalNavigation(destination),
};

export { gaEvents };
