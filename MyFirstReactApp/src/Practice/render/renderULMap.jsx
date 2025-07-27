import { RenderList } from "./renderLIMap";

export function RenderLists({allSeries}) {

  return (
    <ul>
      {allSeries.map((seriesList) => {
        return <RenderList seriesName={seriesList} key={seriesList} />;
      })}
    </ul>
  );
  
}
