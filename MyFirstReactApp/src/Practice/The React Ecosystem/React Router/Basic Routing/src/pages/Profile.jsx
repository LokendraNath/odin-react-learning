import { useParams } from "react-router-dom";
import Bheem from "../Components/Bheem";
import DefaultProfile from "../Components/DefaultProfile";
import Laddu from "../Components/Laddu";

const Profile = () => {
  const { name } = useParams();

  return (
    <div>
      <h1>Hello from profile page!</h1>
      <p>So, how are you?</p>
      <hr />
      <h2>The Profile visited is Here:</h2>
      {name === "bheem" ? (
        <Bheem />
      ) : name === "laddu" ? (
        <Laddu />
      ) : (
        <DefaultProfile />
      )}
    </div>
  );
};

export default Profile;
