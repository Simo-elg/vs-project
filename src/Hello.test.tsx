import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

function Hello() {
    return <h1>Bonjour, Simo</h1>
}

test('affiche un message', () => {
    render(<Hello />);
    const res = screen.getByText('Bonjour, Simo');
    process.stdout.write('✅ [LOG 1] working\n');
    process.stdout.write('✅ [LOG 2] res: ' + res + '\n');
    process.stdout.write('✅ [LOG 3] Le composant contient : ' + res.textContent + '\n');
    // Vérifie que le texte est bien dans le document
    expect(res).toBeInTheDocument();
} );

test('test pour voir les logs', () => {
  process.stdout.write('🔥 JE SUIS DANS LA CONSOLE (CI)\n');
  expect(1 + 1).toBe(3); // volontairement faux
});