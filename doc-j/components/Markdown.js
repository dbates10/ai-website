import React from "react";
import ReactMarkdown from "react-markdown";
import Container from "./Container";
const Markdown = ({ blok }) => {
  return (
    <Container>
      <div className="prose container font-ibm">
        <ReactMarkdown>{blok.markdown_content}</ReactMarkdown>
      </div>
    </Container>
  );
};

export default Markdown;
