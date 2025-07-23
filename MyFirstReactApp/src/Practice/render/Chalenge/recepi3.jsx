import { recipes } from "./data3";

function Recipe({ id, name, ingredients }) {
  return (
    <div className="mt-3">
      <h2 className="text-2xl">{name}</h2>
      <ul>
        {ingredients.map((ingredient) => (
          <li key={id}>{ingredient}</li>
        ))}
      </ul>
    </div>
  );
}

export default function RecipeList() {
  return (
    <div>
      <h1 className="text-4xl mb-10">Recepis</h1>
      {recipes.map((recipe) => {
       return <Recipe {...recipe} key={recipe.id} />;
      })}
    </div>
  );
}
