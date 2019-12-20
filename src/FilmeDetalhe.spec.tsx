import { shallow } from 'enzyme';
import React from 'react';
import { configure } from 'enzyme';
import { act } from 'react-dom/test-utils';

import Adapter from 'enzyme-adapter-react-16';
import { Filme } from './filmes-service';
import { FilmeDetalhe } from './FilmeDetalhe';

configure({ adapter: new Adapter() });

describe('FilmeDetalhe', () => {
    it('deve exibir o card e a lista corretamente', () => {
        const filme: Filme = {
            id: 1,
            abertura: 'uma abertura legal',
            lancamento: new Date('2019-01-01'),
            nome: 'um filme bacaninha'
        }

        const component = shallow(<FilmeDetalhe filme={filme} />)
        expect(component.find('.card-title').text()).toEqual(filme.nome)
        expect(component.find('.card-text').text()).toEqual(filme.abertura)
        expect(component.find('PersonagensList').exists()).toBeTruthy()
    })
})