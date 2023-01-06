import { differenceInMilliseconds, differenceInDays, parseISO } from 'date-fns'

function diferenceBetweenDates(startDate, endDate, returnedBy = 'days') {
  if (!startDate || !endDate) return

  const startDateParse = parseISO(startDate)
  const endDateParse = parseISO(endDate)

  const possibleReturnsTypes = {
    days: differenceInDays,
    milliseconds: differenceInMilliseconds
  }

  const differenceInChoosedType = possibleReturnsTypes[returnedBy]

  return differenceInChoosedType(endDateParse, startDateParse)
}

export default diferenceBetweenDates
