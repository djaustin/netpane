import { Skeleton } from "@chakra-ui/react";
import React from "react";

const SiteCardSkeleton = () => (
  <Skeleton
    w={"270px"}
    h="270px"
    mt={12}
    boxShadow={"2xl"}
    rounded={"md"}
  ></Skeleton>
);

export default SiteCardSkeleton;
