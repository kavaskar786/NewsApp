export function formatToRelativeDate(
  timestamp: string | number | Date
): string {
  const now = new Date();
  const date = new Date(timestamp);

  // Calculate the difference in days
  const diffTime = date.getTime() - now.getTime();
  const diffDays = Math.round(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays === 0) {
    return "today";
  } else if (diffDays < 0 && diffDays >= -30) {
    return `${-1 * diffDays} ${-1 * diffDays === 1 ? "day" : "days"} ago`;
  } else if (diffDays < -30 && diffDays >= -364) {
    return `${(-1 * diffDays) / 30} ${
      (-1 * diffDays) / 30 === 1 ? "month" : "days"
    } ago`;
  } else if (diffDays < -364) {
    return `${(-1 * diffDays) / 364}  ${
      (-1 * diffDays) / 364 === 1 ? "year" : "years"
    } ago`;
  } else {
    return date.toISOString().split("T")[0]; // Fallback to YYYY-MM-DD format
  }
}
