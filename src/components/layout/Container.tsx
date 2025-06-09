import React, { ReactNode } from 'react';

interface ContainerProps {
    children: ReactNode;
}

export const Container: React.FC<ContainerProps> = ( { children } ) => {
    return (
        <div className="container">
            { children }
        </div>
    );
}
