import { shallow } from 'enzyme';
import React from 'react';
import { configure } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';
import { Filme } from './filmes-service';
import { FilmeDetalhe } from './FilmeDetalhe';
import usePersonagens from './usePersonagens';

configure({ adapter: new Adapter() });

jest.mock('./usePersonagens')
describe('FilmeDetalhe', () => {
    it('deve exibir o card e a lista corretamente', () => {
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

        const component = shallow(<FilmeDetalhe filme={filme} />)
        expect(component.find('.card-title').text()).toEqual(filme.nome)
        expect(component.find('.card-text').text()).toEqual(filme.abertura)
        expect(component.find('PersonagensList').exists()).toBeTruthy()
    })

    it('deve exibir o loading enquanto carrega', () => {
        const filme: Filme = {
            id: 1,
            abertura: 'uma abertura legal',
            lancamento: new Date('2019-01-01'),
            nome: 'um filme bacaninha'
        };

        (usePersonagens as jest.Mock).mockReturnValue({
            isLoading: true,
            personagens: []
        });
        
        const component = shallow(<FilmeDetalhe filme={filme} />)
        expect(component.find('Spinner').exists()).toBeTruthy()
    })
})