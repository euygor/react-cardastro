import { Header } from './index';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

it('Teste para verificar se existe a palavra "Cadastrar" dentro do component.', () => {
    render(
        <MemoryRouter>
            <Header />
        </MemoryRouter>
    );

    let button = screen.getByText('Cadastrar');
    expect(button).toBeInTheDocument();
});

export { };