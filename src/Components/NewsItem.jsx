import Image from "../assets/news.webp";
export const NewsItem = ({
  newsTitle,
  description,
  imageSrc,
  newsUrl,
  author,
  sourceName,
  publishedAt,
}) => {
  return (
    <div
      className="card px-3 py-3 shadow-lg rounded"
      style={{
        minWidth: "200px",
        maxWidth: "400px",
        height: "490px",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.03)";
        e.currentTarget.style.boxShadow =
          "0px 4px 15px rgba(255, 255, 255, 0.2)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      <img
        src={imageSrc ? imageSrc : Image}
        className="card-img-top rounded"
        alt={
          description ? description.slice(0, 60) : "News image not available"
        }
        style={{ height: "200px", width: "100%", objectFit: "cover" }}
      />

      <div className="card-body d-flex flex-column">
        <h6 className="card-title  fw-bold mb-1">{newsTitle?.slice(0, 50)}</h6>

        <small className="d-block mb-1">
           From {sourceName}
        </small>

        <small className="d-block mb-2">
          📅{" "}
          {new Date(publishedAt).toLocaleDateString("en-US", {
            month: "short",
            day: "2-digit",
            year: "numeric",
          })}
        </small>

        <div className="flex-grow-1">
          <p
            className="card-text"
            style={{
              overflow: "hidden",
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
              textOverflow: "ellipsis",
              minHeight: "60px",
            }}
          >
            {description
              ? description.length > 100
                ? description.slice(0, 100) + "..."
                : description
              : "No description available for this news."}
          </p>
        </div>

        <a
          href={newsUrl}
          className="btn btn-outline-dark mt-auto fw-bold"
          style={{
            transition: "background-color 0.3s ease, color 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#301f1a";
            e.currentTarget.style.color = "#fff";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "transparent";
            e.currentTarget.style.color = "#301f1a";
          }}
        >
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
