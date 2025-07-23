import { people } from "./data";
import { getImageUrl } from "./utils";

export function AllPhysicists() {
  const physicists = people.filter((p) => p.profession === "chemist");

  const list = physicists.map((p) => (
    <li
      key={p.id}
      className="flex items-center gap-10 mb-5 bg-white pr-5 rounded-2xl"
    >
      <img src={getImageUrl(p)} alt={p.name} className="rounded-2xl" />
      <div>
        <p className="text-2xl">{p.name}</p>
        <p>know for {p.accomplishment}</p>
      </div>
    </li>
  ));

  return <ul>{list}</ul>;
}
