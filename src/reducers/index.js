import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

// Combina los reductores en un reductor raíz
const rootReducer = combineReducers({
  state: (state = {}) => state, // Reductor de estado inicial que no hace nada y simplemente retorna el estado
  form // Reductor del formulario de redux-form
});

export default rootReducer; // Exporta el reductor raíz
