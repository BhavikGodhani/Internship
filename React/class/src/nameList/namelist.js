
    import { recipes } from './data.js';

    function Recipe({ id, name, ingredients }) {
      return (
        <div>
          <h2>{name}</h2>
          <ul>
            {ingredients.map(ingredient =>
              <li key={ingredient}>
                {ingredient}
              </li>
            )}
          </ul>
        </div>
      );
    }
    
 function NameList() {
      return (
        <div>
          <h1>Recipes</h1>
          {recipes.map(recipe =>
            <Recipe {...recipe} key={recipe.id} />
          )}
        </div>
      );
    }
    

export default NameList



//   const list = [1,2,3,4,5];
//   const map = list.map(x => <h2>{x}</h2>)

//  return  <div>{map}</div>