import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class SearchBar extends Component {

    // Método para manejar el envío del formulario
    handleFormSubmit({ query }) {
        console.log('trying to handle submit for query', query);
        // Aquí se puede agregar la lógica para navegar a una nueva ruta
    }

    // Método para renderizar el input del campo de búsqueda
    renderInput(field) {
        return <input type="text" placeholder="Search DailySmarty" {...field.input} />
    }

    render() {
        const { handleSubmit } = this.props; // Método proporcionado por reduxForm para manejar el envío del formulario

        return (
            <form className="search-bar" onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                <Field name="query" component={this.renderInput} /> {/* Campo del formulario */}
            </form>
        );
    }
}

// Decorador reduxForm para conectar el componente con el formulario de redux
SearchBar = reduxForm({
    form: 'searchBar' // Nombre del formulario
})(SearchBar);

export default SearchBar;
