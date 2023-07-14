import { gaEvents } from "../../analytics";

const navigateToExternalLink = (destination: string): any => {
  gaEvents.eventExternalNavigation(destination);
  window.open(destination, "_blank");
};

const navigateToEmailLink = (emailLink: string): string => (window.location.href = emailLink);

export { navigateToExternalLink, navigateToEmailLink };
