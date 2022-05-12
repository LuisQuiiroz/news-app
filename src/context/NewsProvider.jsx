import axios from "axios";
import { createContext, useEffect, useState } from "react";


export const NewsContext = createContext();

export const NewsProvider = ({ children }) => {

    const [category, setCategory] = useState('general');
    const [news, setNews] = useState([]);
    const [page, setPage] = useState(1);
    const [totalNews, setTotalNews] = useState(0);

    useEffect(() => {
        const queryAPI = async () => {
            const country = 'mx'
            const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`
            const { data } = await axios(url);
            setNews(data.articles);
            setTotalNews(data.totalResults);
            setPage(1);
        }
        queryAPI();
    }, [category]);

    useEffect(() => {
        const queryAPI = async () => {
            const country = 'mx'
            const url = `https://newsapi.org/v2/top-headlines?country=${country}&page=${page}&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`
            const { data } = await axios(url);
            setNews(data.articles)
            setTotalNews(data.totalResults)
        }
        queryAPI();
    }, [page]);

    const handleChangeCategory = (e) => {
        setCategory(e.target.value);
    }

    const handleChangePage = (e, valor) => {
        setPage(valor)
    }

    return (
        <NewsContext.Provider
            value={{
                category,
                news,
                page,
                totalNews,
                handleChangeCategory,
                handleChangePage
            }}
        >
            {children}
        </NewsContext.Provider>
    )
}