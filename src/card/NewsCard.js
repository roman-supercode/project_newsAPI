import "./NewsCard.css";


function NewsCard(props) {
    return (
        <article key={props.key}>
            <img src={props.imgUrl} alt={props.title}></img>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <p>{props.date}</p>
            <a href={props.link}>Read More</a>
        </article >
    );
};

export default NewsCard;