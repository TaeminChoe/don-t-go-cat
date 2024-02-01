import Skeleton from "@mui/material/Skeleton";

const SkeletonLoading = () => {
  const viewProducts = new Array(20).fill(0);
  return (
    <div id="main">
      <div id="contentContainer" className="is-open">
        <div className="container">
          {viewProducts.map((item, idx) => {
            return (
              <div className="item" key={idx}>
                <Skeleton
                  variant="rectangular"
                  width={"100%"}
                  height={"calc(50vw - 30px)"}
                  sx={{ display: "inline-block" }}
                />
                <Skeleton width="90%" />
                <Skeleton width="60%" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default SkeletonLoading;
