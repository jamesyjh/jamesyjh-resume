export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const tzid = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
    // hour: "numeric",
    // minute: "numeric",
    timeZone: tzid,
  };

  return date.toLocaleString("en-US", options);
};
