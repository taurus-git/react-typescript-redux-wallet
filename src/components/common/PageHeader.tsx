import React from 'react';
import { useRouteMeta } from "../../features/navigation/hooks/useRouteMeta";

interface PageHeaderProps {
    header?: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ( { header } ) => {
    const routeMeta = useRouteMeta();
    const displayHeader = header ?? routeMeta?.label;

    if ( !displayHeader ) return null;

    return (
        <h1>{ displayHeader }</h1>
    );
}
