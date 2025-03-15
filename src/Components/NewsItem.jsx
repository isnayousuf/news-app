import Image from "../assets/alt-news.svg";
export const NewsItem = ({title, description, imageSrc, newsUrl}) => {
  return (
    <div
      className="card bg-dark text-light d-inline-block my-3 mx-3 px-2 py-2"
      style={{ maxWidth: "345px" }}
    >
      <div>Hello</div>
      <img
        src={imageSrc ? imageSrc : Image}
        className="card-img-top"
        alt="news-img"
        style={{ height: "200px", width: "360px" }}
      />
      <div className="card-body">
        <h5 className="card-title">{title?.slice(0, 50)}</h5>
        <p className="card-text">
          {description ? description.slice(0, 90) : "News Description"}
        </p>
        <a href={newsUrl} className="btn btn-primary">
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
