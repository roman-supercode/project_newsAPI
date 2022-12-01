import "./Home.css";
import NewsCard from "../card/NewsCard";
import { useState } from "react";
import { useEffect } from "react";
import key from "../key.json";

function Home() {
    const [news, setNews] = useState([]);
    const [country, setCountry] = useState("de");


    useEffect(() => {
        fetch(`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${key.key}`)
            .then(response => response.json())
            .then(fetchedNews => {
                // console.log(fetchedNews);
                setNews(fetchedNews.articles);
            });
    }, [country]);



    return (
        <div className="Container">
            <h1>News By Super(code)</h1>
            <label for="country">Land wählen:</label>

            <select onChange={e => { setCountry(e.target.value); }} className="country" name="country">
                <option value="us">USA</option>
                <option value="de">Germany</option>
                <option value="fr">France</option>
                <option value="tr">Türkei</option>
            </select>

            <div className="newsGrid">
                {news.map((item, index) => {
                    return (
                        <div key={index}>
                            <NewsCard
                                alt={item.title}
                                imgUrl={item.urlToImage}
                                title={item.title}
                                description={item.description}
                                date={item.publishedAt}
                                link={item.url}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Home;