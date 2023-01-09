import { Box, IconButton, Paper, Stack, Typography } from '@mui/material';
import { Document, Page } from 'react-pdf'
import { PDFDocumentProxy } from 'pdfjs-dist/types/src/display/api';
import DownloadIcon from '@mui/icons-material/Download';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useCallback, useState } from 'react';
import { SizeMe } from 'react-sizeme';

const CVPath = "/cv.pdf";
const CVDownloadName = "DamianFigueroaCV.pdf"

const CV: React.FC = ({ }) => {
    const [page, setPage] = useState<number>(1)
    const [totalPages, setTotalPages] = useState<number>(1);

    const onLoadSuccess = useCallback((pdf: PDFDocumentProxy) => {
        setPage(1)
        setTotalPages(pdf.numPages)
    }, [])

    const prevPage = useCallback(() => {
        setPage(p => p == 1 ? totalPages : p - 1)
    }, [page, totalPages])

    const nextPage = useCallback(() => {
        setPage(p => p == totalPages ? 1 : p + 1)
    }, [page, totalPages])

    return (
        <Box display="flex" justifyContent={"center"} marginTop={2} marginBottom={2}>
            <SizeMe
                refreshMode='debounce'
            >{({ size }) =>
                <Paper sx={{maxWidth: 800, width:"100%"}}>
                    <Box display="flex" flexDirection="row" alignItems="center" justifyContent="center" padding={0.5}>
                        <Stack spacing={1} direction="row" alignItems={"center"}>
                            <IconButton onClick={prevPage}>
                                <ChevronLeftIcon />
                            </IconButton>
                            <Typography>{page} of {totalPages}</Typography>
                            <IconButton onClick={nextPage}>
                                <ChevronRightIcon />
                            </IconButton>
                        </Stack>
                        <Box flex={1} />
                        <IconButton href={CVPath} download={CVDownloadName}>
                            <DownloadIcon />
                        </IconButton>
                    </Box>
                    <Box>
                        <Document file={CVPath} onLoadSuccess={onLoadSuccess}>
                            <Page
                                pageNumber={page}
                                renderTextLayer={false}
                                renderAnnotationLayer={false}
                                width={size.width ?? undefined}
                            />
                        </Document>
                    </Box>
                </Paper>
            }</SizeMe>
        </Box>
    )
}

export default CV;