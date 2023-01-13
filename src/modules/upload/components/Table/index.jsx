import { memo } from 'react'
import {
  Table,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Thead,
  Flex,
  Link,
  IconButton,
  Text,
  useColorModeValue
} from '@chakra-ui/react'

import DeleteButtonContainer from './components/DeleteButtonContainer'
import { FileItem } from 'lib/components'
import { AiOutlineDownload } from 'react-icons/ai'
import { Empty, Loader } from 'lib/components'
import { usePageManager } from '@upload/contexts/PageManager/Provider'

function FilesTable() {
  const { files, loadingFiles } = usePageManager()

  if (loadingFiles) {
    return (
      <Loader
        text="Loading files"
        h="250px"
        border="1px"
        borderRadius="md"
        borderColor={useColorModeValue('gray.200', 'whiteAlpha.200')}
      />
    )
  }

  if (files?.length === 0) {
    return (
      <Empty
        title="No files uploaded"
        h="250px"
        border="1px"
        borderRadius="md"
        borderColor={useColorModeValue('gray.200', 'whiteAlpha.200')}
      />
    )
  }

  return (
    <>
      <TableContainer>
        <Table>
          <Thead>
            <Tr>
              <Th>Files</Th>
              <Th textAlign="right">Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {files?.map((file) => {
              return (
                <Tr key={file.id}>
                  <Td>
                    <FileItem file={file} />
                  </Td>

                  <Td>
                    <Flex gap={2} justify="flex-end">
                      <DeleteButtonContainer fileId={file.id} />
                      <Link href={file.url} download target="_blank">
                        <IconButton
                          colorScheme="dark"
                          variant="ghost"
                          icon={<AiOutlineDownload />}
                        />
                      </Link>
                    </Flex>
                  </Td>
                </Tr>
              )
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  )
}

export default memo(FilesTable)
