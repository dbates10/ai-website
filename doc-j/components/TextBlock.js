import React from "react";
import Container from "./Container";
const TextBlock = (props) => {
  const { content } = props;
  return (
    <Container className="max-w-[1440px]">
      <div className="w-full">
        <div className="w-3/4 mx-auto">
          <p className="text-lg font-thin font-ibm text-center px-4 md:px-8">
            {content.description}
          </p>
        </div>
      </div>
    </Container>
  );
};

export default TextBlock;
