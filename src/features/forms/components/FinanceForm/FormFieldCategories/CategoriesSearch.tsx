import React from 'react';

interface CategoriesSearchProps {
    searchTerm: string,
    setSearchTerm: React.Dispatch<React.SetStateAction<string>>,
}

export const CategoriesSearch: React.FC<CategoriesSearchProps> = ({searchTerm, setSearchTerm}) => {
    return (
        <div>
            <input
                type="search"
                placeholder="Поиск категории..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
            />
        </div>
    );
}

