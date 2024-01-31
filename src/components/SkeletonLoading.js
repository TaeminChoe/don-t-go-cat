import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";

const SkeletonLoading = () => {
  const viewProducts = new Array(20).fill(0);
  return (
    <div id="main">
      <div id="contentContainer" className="is-open">
        <div className={`container`}>
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

  return (
    <>
      <div className="skeleton-box">
        <Grid container columnSpacing={{ sm: 2, md: 3 }}>
          {Array.from(new Array(20)).map((item, idx) => (
            <Grid item={true} xs={6} key={idx}>
              <Box key={idx} sx={{ marginRight: 0.5, display: "block" }}>
                <Skeleton
                  variant="rectangular"
                  width={"185px"}
                  height={"185px"}
                  sx={{ display: "inline-block" }}
                />
                <Box sx={{ pt: 0.5 }}>
                  <Skeleton width="80%" />
                  <Skeleton width="60%" />
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
};
export default SkeletonLoading;
