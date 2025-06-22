import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

function Hello() {
    return <h1>Bonjour, Simo</h1>
}

test('affiche un message', () => {
    render(<Hello />);
    const res = screen.getByText('Bonjour, Simo');
    console.log('res:', res);
    console.log('Le composant contient :', res.textContent);
    // Vérifie que le texte est bien dans le document
    expect(res).toBeInTheDocument();
} );