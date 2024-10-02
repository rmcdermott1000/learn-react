export const recipes = [{
  id: 'greek-salad',
  name: 'Greek Salad',
  ingredients: new Set(['tomatoes', 'cucumber', 'onion', 'olives', 'feta'])
}, {
  id: 'hawaiian-pizza',
  name: 'Hawaiian Pizza',
  ingredients: new Set(['pizza crust', 'pizza sauce', 'mozzarella', 'ham', 'pineapple'])
}, {
  id: 'hummus',
  name: 'Hummus',
  ingredients: new Set(['chickpeas', 'olive oil', 'garlic cloves', 'lemon', 'tahini'])
}];

function listOut({list}: {list: Array<String>}){
  const ingrediants = list.map( list =>
    <li>{list}</li>
  )
  return <ul>{ingrediants}</ul>
}

export default function RecipeList() {
  const recipe_list = recipes.map(recipes =>
    <ul key={recipes.id}>
      <li>
      {recipes.name}
      {listOut({list:Array.from(recipes.ingredients)})}
      </li>
    </ul>
  );
  return (
    <div>
      <h1>Recipes</h1>
      {recipe_list}
    </div>
  );
}