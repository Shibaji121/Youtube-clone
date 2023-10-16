import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const SkeletonVideo = () => {
  return (
    <div style={{ width: "90%", margin: "1rem 0" }}>
      <SkeletonTheme>
        <Skeleton height={190} />
        <div style={{ display: "flex" }}>
          <Skeleton
            style={{ margin: "0.5rem" }}
            circle
            height={40}
            width={40}
          />
          <div>
            <Skeleton height={20} width="18vw" />
            <Skeleton height={15} width="15vw" />
          </div>
        </div>
      </SkeletonTheme>
    </div>
  );
};

export default SkeletonVideo;
