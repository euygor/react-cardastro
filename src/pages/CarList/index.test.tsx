import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { CarList } from './index';

it('test para verificar se existe uma lista de carros', () => {
    const { container } = render(
        <MemoryRouter>
            <CarList />
        </MemoryRouter>
    );
    const listEl = container.getElementsByClassName('list');
    expect(listEl.length).toBeGreaterThan(0);
});

it('test para verificar se a lista de carros é igual a 5', () => {
    const { container } = render(
        <MemoryRouter>
            <CarList />
        </MemoryRouter>
    );

    const carsList = container.getElementsByClassName('carItem');
    expect(carsList.length).toEqual(5);
});

export { };