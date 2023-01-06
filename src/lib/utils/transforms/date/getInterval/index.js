import { intervalToDuration } from 'date-fns'

export default function getInterval({ start, end, format, options }) {
  const interval = intervalToDuration({
    start: new Date(start),
    end: new Date(end || Date.now())
  })

  const availableFormats = {
    medicalRecords: `${interval.years}A ${interval.months}M ${interval.days}D`
  }

  let defaultFormat = `há ${
    interval.years && !options?.ignoreYears ? `${interval.years} anos` : ''
  } ${
    interval.months && !options?.ignoreMonths ? `${interval.months} meses` : ''
  } ${interval.days && !options?.ignoreDays ? `${interval.days} dias` : ''} ${
    interval.hours && !options?.ignoreHours ? `${interval.hours} horas` : ''
  } ${
    interval.minutes && !options?.ignoreMinutes
      ? `${interval.minutes} minutos`
      : ''
  } ${
    interval.seconds && !options?.ignoreSeconds
      ? `${interval.seconds} segundos`
      : ''
  }`

  let output

  if (format) {
    if (availableFormats[format]) {
      output = availableFormats[format]
    } else {
      output = format
        .replace('YY', interval.years)
        .replace('MM', interval.months)
        .replace('DD', interval.days)
        .replace('hh', interval.hours)
        .replace('mm', interval.minutes)
        .replace('ss', interval.seconds)
    }
  } else {
    output = defaultFormat.replace('  ', '')
  }

  return output
}
