import React from 'react'

const NewProduct = () => {
    const CATEGORIAS_DISPONIBLES = [

        'tecnologia',
        'hogar',
        'deportes'
    ]
    return (
        <div>
            <h1>Crear producto</h1>
            <form>
                <div>
                    <label htmlFor="Nombre">Nombre del producto</label>
                    <input type="text" name="nombre" id='nombre' />
                </div>
                <div>
                    <label htmlFor="Descripcion"></label>
                    <textarea type="text" name="descripcion" id="descripcion" ></textarea>
                </div>
                <div>
                    <label htmlFor="precio">Precio</label>
                    <input type="number" id='precio' name='precio' />
                </div>
                <div>
                    <label htmlFor="stock">stock</label>
                    <input type="number" id='stock' name='stock' />
                </div>
                <div>
                    <label htmlFor="codigo">Ingrese el codigo</label>
                    <input type="number" name='codigo' id='codigo' />
                </div>
                <div>
                    <label htmlFor="categorias">Seleccione una categoria</label>
                    <select name="categorias" id="categorias">
                        {CATEGORIAS_DISPONIBLES.map((categoria, index) => {
                            <option key={index + categoria} value="{categoria}>{categoria}"></option>
                        })}
                    </select>
                </div>
                <div>
                    <label htmlFor="thumbnail">Ingrese la imagen</label>
                    <input type="text" />
                </div>
            </form>
        </div>
    )
}

export default NewProduct
