export const getShortDateString = (dateValue: string): string => {
  return new Date(dateValue).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}
