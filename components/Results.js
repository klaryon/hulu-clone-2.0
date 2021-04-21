import Thumbnail from "./Thumbnail";

function Results({ requests }) {
  return (
    <div>
      {requests.map((result) => (
        <Thumbnailbnail />
      ))}
    </div>
  );
}

export default Results;
