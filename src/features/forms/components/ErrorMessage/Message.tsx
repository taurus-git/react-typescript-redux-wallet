import React from 'react';

type MessageTypes = 'error' | 'warning' | 'info' | 'success';

interface MessageProps {
    message: string,
    type?: MessageTypes,
    className?: string,
}

export const Message: React.FC<MessageProps> = ( { message, type = 'error', className = '' } ) => {
    return (
        <p className={ `message message-${ type } ${ className }`.trim() }>
            { message }
        </p>
    );
}

