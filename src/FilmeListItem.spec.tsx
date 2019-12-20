import { shallow } from 'enzyme';
import React from 'react';
import { configure } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';
import { FilmeListItem } from './FilmeListItem';
import { Filme } from './filmes-service';
configure({ adapter: new Adapter() });

describe('FilmeListItem', () => {
    it('deve exibir o alerta corretamente', () => {
        const filme: Filme = {
            abertura: "abertura",
            id: 1,
            lancamento: new Date('2019-01-01'),
            nome: 'nomeFilme'
        }

        const handleClick = jest.fn()

        const component = shallow(<FilmeListItem filme={filme}  handleClick={handleClick}/>)
        
        expect(component.find('.list-group-item').text()).toBe(filme.nome)
        
        component.simulate('click')

        expect(handleClick).toHaveBeenCalledTimes(1)    
    })

})