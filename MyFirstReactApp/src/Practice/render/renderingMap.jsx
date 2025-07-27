import { RenderLists } from "./renderULMap";

export function MyFavSeries() {
  
  const allSeries = [
    "Money Heist",
    "Stranger Things",
    "Squid Game",
    "Breaking Bad",
    "All Of Us Dead",
  ];

  const seriesList = allSeries.map(series => <li key={series}>{series}</li>)

  return (
    <div>
      <RenderLists allSeries={seriesList}/>
    </div>
  );
}
