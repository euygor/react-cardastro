import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { act } from 'react-dom/test-utils';
import App from './App';

it('test para somar 1 + 2 é retornar 3', () => {
    let result = 1 + 2;
    expect(result).toBe(3);
});

it('test para multiplicar 5 + 3 é retornar 15', () => {
    let result = 5 * 3;
    expect(result).toBe(15);
});

it('test para verificar se dentro da aplicação tem uma classe chamada container', () => {
    const { container } = render(
        <MemoryRouter>
            <App />
        </MemoryRouter>
    );
    expect(container.getElementsByClassName('container').length).toBeGreaterThan(0);
});

it('test para verificar se o componente NotFound está sendo renderizado ao inserir uma rota não existente', () => {
    const { container } = render(
        <MemoryRouter initialEntries={['/not-found']}>
            <App />
        </MemoryRouter>
    );

    const h2 = container.getElementsByTagName('h2')[0];
    expect(h2.innerHTML).toBe('Página não encontrada');
});

it('test para verificar se ao clicar no botão cadastrar está sendo redirecionado para a tela de cadastro de carros', () => {
    const { container } = render(
        <MemoryRouter>
            <App />
        </MemoryRouter>
    );

    act(() => {
        let registerBtn = container.getElementsByClassName('headerRight')[0].getElementsByTagName('a')[0];

        registerBtn.click();
    });

    const registrationTitle = screen.getByText('Cadastro de carro');
    expect(registrationTitle).toBeInTheDocument();
});

it('test para verificar se o botão de cadastrar carros na rota ["/car"] está desabilitado enquanto os campos estiverem vazios', () => {
    const { container } = render(
        <MemoryRouter initialEntries={['/car']}>
            <App />
        </MemoryRouter>
    );

    const button = container.getElementsByClassName('button full')[0].hasAttribute('disabled');
    expect(button).toBe(true);
});

export { };