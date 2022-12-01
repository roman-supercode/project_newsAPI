import "./Home.css";
import NewsCard from "../card/NewsCard";
import { useState } from "react";
import { useEffect } from "react";
import key from "../key.json";

function Home() {

    // console.log(key.key);
    // const key = key.key;
    const [news, setNews] = useState([]);
    // console.log(news);
    // console.log(object);

    useEffect(() => {
        fetch(`https://newsapi.org/v2/top-headlines?country=de&apiKey=${key.key}`)
            .then(response => response.json())
            .then(fetchedNews => {
                // console.log(fetchedNews);
                setNews(fetchedNews.articles);
            });
    }, []);



    return (
        <div className="Container">
            <h1>News By Super(code)</h1>
            <label for="cars">Land wählen:</label>
            <select id="cars" name="cars">
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="fiat">Fiat</option>
                <option value="audi">Audi</option>
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