const navigateToExternalLink = (destination: string): Window | null => window.open(destination, "_blank");

const navigateToEmailLink = (emailLink: string): string => (window.location.href = emailLink);

export { navigateToExternalLink, navigateToEmailLink };
