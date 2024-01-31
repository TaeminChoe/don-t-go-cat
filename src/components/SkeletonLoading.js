import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
const SkeletonLoading = () => {
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
