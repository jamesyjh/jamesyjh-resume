import { gaEvents } from "../../analytics";

const navigateToExternalLink = (destination: string): Window | null => {
  gaEvents.eventExternalNaviation(destination);
  return window.open(destination, "_blank");
};

const navigateToEmailLink = (emailLink: string): string => (window.location.href = emailLink);

export { navigateToExternalLink, navigateToEmailLink };
