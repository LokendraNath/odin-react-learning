//================== Challenge 1 of 3: Extract a component
/// => This Gallery component contains some very similar markup for two profiles. Extract a Profile component out of it to reduce the duplication. You’ll need to choose what props to pass to it.

// import { getImageUrl } from "./utils.js";

function Profile({ name, profession, totalAward, awardName, discovered }) {
  return (
    <section className="profile">
      <h2>{name}</h2>
      {/* <img
        className="avatar"
        src={getImageUrl("szV5sdG")}
        alt="Maria Skłodowska-Curie"
        width={70}
        height={70}
      /> */}
      <ul>
        <li>
          <b>Profession: </b>
          {profession}
        </li>
        <li>
          <b>Awards: {totalAward} </b>({awardName.join(", ")})
        </li>
        <li>
          <b>Discovered: </b>
          {discovered}
        </li>
      </ul>
    </section>
  );
}

export function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Profile
        name="Katsuko Saruhashi"
        profession="geochemist"
        totalAward="2"
        awardName={[
          "Nobel Prize in Physics",
          "Nobel Prize in Chemistry",
          "Davy Medal",
          "Matteucci Medal",
        ]}
        discovered="a method for measuring carbon dioxide in seawater"
      />

      <Profile
        name="Maria Skłodowska-Curie"
        profession="physicist and chemist"
        totalAward="4"
        awardName={["Miyake Prize for geochemistry", "Tanaka Prize"]}
      />
    </div>
  );
}
////////////////////////

function Card({ children }) {
  return (
    <div className="card">
      <div className="card-content">{children}</div>
    </div>
  );
}
export function ProfileC() {
  return (
    <div>
      <Card>
        <h1>Photo</h1>
        {/* <img
          className="avatar"
          src="https://i.imgur.com/OKS67lhm.jpg"
          alt="Aklilu Lemma"
          width={70}
          height={70}
        /> */}
      </Card>
      <Card>
        <h1>About</h1>
        <p>
          Aklilu Lemma was a distinguished Ethiopian scientist who discovered a
          natural treatment to schistosomiasis.
        </p>
      </Card>
    </div>
  );
}
