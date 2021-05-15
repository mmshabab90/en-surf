import Thumbnail from "./Thumbnail";
import FlipMove from "react-flip-move";

function Results({ items }) {
  //   console.log(items);
  return (
    <FlipMove className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-4 3xl:flex flex-wrap justify-center">
      {items.map((result) => (
        <Thumbnail key={result.id} result={result} />
      ))}
    </FlipMove>
  );
}

export default Results;
