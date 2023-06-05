import Image from "next/image";
import React from "react";
import notFound from "../public/notFound.png";

const ErrorSearch = () => {
  return (
    <Image
      className="place-self-center"
      src={notFound}
      width={200}
      height={200}
    />
  );
};

export default ErrorSearch;
