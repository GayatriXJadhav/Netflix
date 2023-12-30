import React, { useEffect, useState } from "react";
import "./Home.scss";
import { popular, titlefetch, trending } from "./Functions";

const Card = ({ img }) => <img className="card" src={img} alt="cover" />;

const Row = ({
    title,
    arr = [
        {
            poster: "http://media.comicbook.com/2018/03/avengers-infinity-war-poster-1093756.jpeg",
        },
    ],
}) => (
    <div className="row">
        <h2>{title}</h2>
        <div>
            {arr.map((item, index) => (
                <Card key={index} img={item.poster} />
            ))}
        </div>
    </div>
);

const Home = () => {
    const [popularmovies, setpopularmovies] = useState([]);
    const [popularid, setpopularids] = useState([]);
    const [trendingid, settrendingid] = useState([]);
    const [trendingmovies, settrendingmovies] = useState([]);

    useEffect(() => {
        popular(setpopularids);
        trending(settrendingid);
    }, []);
    useEffect(() => {
        // console.log(id);
        titlefetch(popularid, setpopularmovies);
        titlefetch(trendingid, settrendingmovies);
    }, [popularid, trendingid]);

    return (
        <section className="home">
            <div className="banner"></div>

            <Row title={"Popular on Netflix"} arr={popularmovies} />
            <Row title={"Movies"} arr={trendingmovies} />
            {/* <Row title={"TV shows"} />
            <Row title={"Recently viewed"} />
            <Row title={"My list"} /> */}
        </section>
    );
};

export default Home;
