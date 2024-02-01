import { Skeleton } from "@mui/material";
import HeaderBack from "components/HeaderBack";
import Layout from "components/Layout";
import SkeletonLoading from "./SkeletonLoading";

const SkeletonDetailLoading = () => {
  return (
    <Layout id="detail" CustomHeader={HeaderBack}>
      <div style={{ marginBottom: "30px" }}>
        <div className="banner" style={{ width: "100vw", height: "100vw" }}>
          <Skeleton
            variant="rectangular"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
        <div className="seller-info">
          <Skeleton
            variant="circular"
            className="profile"
            style={{ height: "10vw", borderRadius: "50%" }}
          />
          <div className="seller-id">
            <Skeleton style={{ width: "40%" }} />
          </div>

          <div
            className="seller-score"
            style={{
              display: "flex",
              flexFlow: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Skeleton style={{ display: "block", width: "100%" }} />
            <Skeleton style={{ disblay: "block", width: "70%" }} />
          </div>
        </div>
        {/* 판매상품 정보 * */}
        <div className="product-info">
          <Skeleton clasName="title" style={{ width: "70%" }} />
          <Skeleton className="product-date" style={{ width: "20%" }} />
          <Skeleton className="description" />
          <Skeleton style={{ width: "60%" }} />
        </div>
        {/** 판매자가 파는 다른 상품 */}
        <div className="title" style={{ position: "relative" }}>
          <Skeleton
            style={{
              width: "60%",
              position: "absolute",
              left: "30px",
              top: "50px",
            }}
          />
        </div>
        <SkeletonLoading />
      </div>
    </Layout>
  );
};
export default SkeletonDetailLoading;
