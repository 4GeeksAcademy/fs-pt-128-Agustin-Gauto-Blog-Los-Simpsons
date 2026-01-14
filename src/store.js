export const initialStore=()=>{
  return{
    message: null,
    characters: [],
    location: [],
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

        case 'get_location':

      return {
        ...store,
        location: action.payload
      }

    default:
      throw Error('Unknown action.');
  }    
}
