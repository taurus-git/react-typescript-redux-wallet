import React from 'react';

interface CategoriesSearchProps {
    searchTerm: string,
    setSearchTerm: React.Dispatch<React.SetStateAction<string>>,
}

export const CategoriesSearch: React.FC<CategoriesSearchProps> = ( { searchTerm, setSearchTerm } ) => {
    return (
        <div className="d-flex my-1 mb-1">
            <input
                type="search"
                placeholder="Поиск категории..."
                className="flex-1 px-1"
                value={ searchTerm }
                name="searchTerm"
                onChange={ e => setSearchTerm( e.target.value ) }
            />
        </div>
    );
}

