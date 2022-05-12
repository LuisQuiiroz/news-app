import React from 'react'
import { useNews } from '../hooks/useNews'
import { Container, Grid, Pagination, Stack, Typography } from "@mui/material"
import News from './News';


const NewsList = () => {
    const { news, page, totalNews, handleChangePage } = useNews();
    const totalPages = Math.ceil(totalNews / 20)
    return (
        <>
            <Typography
                textAlign='center'
                marginY={5}
                variant="h3"
                component="h2"
            >
                Últimas noticias
            </Typography>
            <Grid
                container
                spacing={2}
            >
                {
                    news.map(news => (
                        <News
                            key={news.url}
                            news={news}
                        />
                    ))
                }
            </Grid>
            <Stack
                sx={{
                    marginY: 5
                }}
                spacing={2}
                direction="row"
                justifyContent="center"
                alignItems="center"
            >
                <Pagination
                    page={page}
                    count={totalPages}
                    color="primary"
                    onChange={handleChangePage}
                />
            </Stack>
        </>
    )
}

export default NewsList