import { shallow } from 'enzyme';
import React from 'react';
import { configure } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';
import { Personagem } from './filmes-service';
import { PersonagensList } from './PersonagensList';

configure({ adapter: new Adapter() });

describe('FilmesList', () => {
    it('deve exibir a lista corretamente', () => {
        const personagens: Personagem[] = [
            { nome: "Fulaninho" },
            { nome: "Fulaninho 2" }
        ]

        const component = shallow(<PersonagensList personagens={personagens} />)
        
        expect(component.find('.personagem')).toHaveLength(2)
    })
})