function Lists({ seriesData }) {
  return (
    <ul>
      {seriesData.map((series) => {
        return series.startsWith("A") && <li key={series}>{series}</li>; // yaha ternary bhi use kar sakte hai
      })}
    </ul>
  );
}

function ListsIfElse({ seriesData }) {

  if (seriesData.length === 0) {
    return <h1>There Is No Series</h1>;
  }

  return (
    <ul>
      {seriesData.map((series) => {
        return series.startsWith("A") && <li key={series}>{series}</li>; // yaha ternary bhi use kar sakte hai
      })}
    </ul>
  );
}

export function TernaryMyFavSeries() {
  // const data = [
  //   "Money Heist",
  //   "Stranger Things",
  //   "Squid Game",
  //   "Breaking Bad",
  //   "All Of Us Dead",
  // ];
  const data = [];

  return (
    <div>
      <h1>All Series: </h1>
      <ListsIfElse seriesData={data} />
    </div>
  );
}
