import Image from "../assets/news.webp";
export const NewsItem = ({title, description, imageSrc, newsUrl}) => {
  return (
    <div
      className="card bg-dark text-light d-inline-block my-3 mx-3 px-2 py-2"
      style={{ minWidth: "340px", maxWidth: "345px", height: "400px" }} 
    >
      <div>Hello</div>
      <img
        src={imageSrc ? imageSrc : Image}
        className="card-img-top"
        alt="news-img"
        style={{ height: "200px", width: "100%", objectFit: "cover" }}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{title?.slice(0, 50)}</h5>
        <p
          className="card-text"
          style={{
            flex: "1",
            overflow: "hidden",
            display: "-webkit-box",
            WebkitLineClamp: 3, 
            WebkitBoxOrient: "vertical",
            textOverflow: "ellipsis",
          }}
        >
          {description ? description : "News Description"}
        </p>
        <a href={newsUrl} className="btn btn-primary mt-auto">
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
