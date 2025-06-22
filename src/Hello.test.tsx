import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

function Hello() {
    return <h1>Bonjour, Simo</h1>
}

test('affiche un message', () => {
    render(<Hello />);
    expect(screen.getByText('Bonjour, Simo')).toBeInTheDocument();
} );