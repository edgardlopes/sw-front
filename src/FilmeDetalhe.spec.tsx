import React from 'react';
import { render } from '@testing-library/react';

import { Filme } from './filmes-service';
import { FilmeDetalhe } from './FilmeDetalhe';
import usePersonagens from './usePersonagens';

jest.mock('./usePersonagens')


describe('FilmeDetalhe', () => {
    it('deve exibir o card e a lista corretamente', async () => {
        const filme: Filme = {
            id: 1,
            abertura: 'uma abertura legal',
            lancamento: new Date('2019-01-01'),
            nome: 'um filme bacaninha'
        };

        (usePersonagens as jest.Mock).mockResolvedValue({
            isLoading: false,
            personagens: [{ nome: 'Zé pequeno' }]
        });

        const component = render(<FilmeDetalhe filme={filme} />)
        
        // expect(component.getByTestId('filme-nome').innerText).toEqual(filme.nome)
        // expect(component.getByTestId('filme-abertura').innerText).toEqual(filme.abertura)

        // expect(component.find('PersonagensList').exists()).toBeTruthy()
    })

    // it('deve exibir o loading enquanto carrega', () => {
    //     const filme: Filme = {
    //         id: 1,
    //         abertura: 'uma abertura legal',
    //         lancamento: new Date('2019-01-01'),
    //         nome: 'um filme bacaninha'
    //     };

    //     (usePersonagens as jest.Mock).mockReturnValue({
    //         isLoading: true,
    //         personagens: []
    //     });
        
    //     const component = shallow(<FilmeDetalhe filme={filme} />)
    //     expect(component.find('Spinner').exists()).toBeTruthy()
    // })
})