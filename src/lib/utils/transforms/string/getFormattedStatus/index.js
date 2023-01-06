import defaultStatus from './status'
import publishStatus from './publish'

export default function getFormattedStatus(status, context = 'publish') {
  const possibleStatus = {
    status: defaultStatus,
    publish: publishStatus
  }

  const statusContext = possibleStatus[context]

  return statusContext[status]
}
