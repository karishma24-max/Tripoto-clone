import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/react";
import {ChevronRightIcon} from "@chakra-ui/icons"
const BreadCrum = () => {
  return (
    <ChakraProvider>
      <Breadcrumb
        spacing="8px"
        separator={<ChevronRightIcon color="gray.500" />}
      >
        <BreadcrumbItem>
          <img src="https://cdn1.tripoto.com/assets/2.9/img/logo/mini-logo.png" alt="" />
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink href="#">About</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink href="#">Contact</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
    </ChakraProvider>
  );
};
export default BreadCrum;
