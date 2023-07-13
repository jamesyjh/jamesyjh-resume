import gtag from "ga-gtag";

const clickedDownloadResume = (): void => {
  gtag("event", "download_resume");
};

const navigatedToExternalPage = (destination: string): void => {
  gtag("event", "external_navigation", {
    destination,
  });
};

const gaEvents = {
  eventDownloadResume: clickedDownloadResume,
  eventExternalNaviation: navigatedToExternalPage,
};

export { gaEvents };
