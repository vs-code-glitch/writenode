import Skeleton from "react-loading-skeleton";

const SkeletonCard = () => {
  return (
    <div className="card">
      <p className="title">
        <Skeleton />
      </p>
      <p className="description">
        <Skeleton count={5} />
      </p>
      <p className="control">
        <span className="author">
          <Skeleton width="70px" />
        </span>
      </p>
    </div>
  );
};

export default SkeletonCard;
