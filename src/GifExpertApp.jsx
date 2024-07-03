import { useState } from "react";
import { AddCategory, GifGrid } from "./components/";


export const GifExpertApp = () => {
  const [ categories, setCategories ] = useState( ['One Punch'] );
  
  const onAddCategory = ( newCategory ) => {
    // setCategorias( [ ...categorias, 'The office' ] );
    // setCategorias( cat => [ ...cat, 'The Office' ]);
    if( categories.includes( newCategory ) ) return;
    setCategories( [ newCategory, ...categories ]);
  };
  
  return (
    <>
        {/* titulo */}
        <h1>GifExpertApp</h1>

        {/* Input */}
        <AddCategory 
          // setCategories={ setCategorias }
          onNewCategory={ onAddCategory }
        />


        {/* Listado de Gif */}


        {
          categories.map( ( category ) => (
            <GifGrid 
              key={ category } 
              category={ category }/>
          ))
        }

    </>
  );
};

