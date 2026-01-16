export const initialStore=()=>{
  return{
    message: null,
    characters: [],
    locations: [],
    favorites: [],
    favoritesLocation: [],
    todos: [
      {
        id: 1,
        title: "Make the bed",
        background: null,
      },
      {
        id: 2,
        title: "Do my homework",
        background: null,
      }
    ]
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
    case 'add_task':

      const { id,  color } = action.payload

      return {
        ...store,
        todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
      };

      case 'get_characters':

      return {
        ...store,
        characters: action.payload
      }

        case 'get_locations':

      return {
        ...store,
        locations: action.payload
      }

      case 'add_favorites':

      return {
        ...store,
        favorites: [...store.favorites, action.payload]
      }

        case "delete_favorite":
      return {
        ...store,
        favorites: store.favorites.filter(favorite => favorite.id !== action.payload)
      }

      case 'add_favorites_location':

      return {
        ...store,
        favoritesLocation: [...store.favoritesLocation, action.payload]
      }

        case "delete_favorite_location":
      return {
        ...store,
        favoritesLocation: store.favoritesLocation.filter(favorite => favorite.id !== action.payload)
      }

    default:
      throw Error('Unknown action.');
  }    
}
