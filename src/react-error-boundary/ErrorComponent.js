import React from 'react';

const ErrorComponent = ({username}) => {
    if (username === 'error') {
        throw new Error('Errorrrrrrrrrrrrrrrrrr');
    }
    return `Hi ${username}`
}

export default ErrorComponent;
