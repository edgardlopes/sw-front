import { shallow, mount } from 'enzyme';
import React from 'react';
import { configure } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';
import { Filme } from './filmes-service';
import { FilmesList } from './FilmesList';
import { FilmeListItem } from './FilmeListItem';

configure({ adapter: new Adapter() });

describe('FilmesList', () => {
    it('deve exibir a lista corretamente', () => {
        const filmes: Filme[] = [{
            abertura: "abertura",
            id: 1,
            lancamento: new Date('2019-01-01'),
            nome: 'nomeFilme'
        }]

        const handleClick = jest.fn()

        const component = shallow(<FilmesList handleFilmeClick={handleClick} filmes={filmes} />)
        
        expect(component.find('FilmeListItem')).toHaveLength(1)
    })

    it('deve clicar corretamente', () => {
      const filme = {
        abertura: "abertura",
        id: 1,
        lancamento: new Date('2019-01-01'),
        nome: 'nomeFilme'
      }


      const handleClick = jest.fn()

      const component = mount(<FilmesList handleFilmeClick={handleClick} filmes={[filme]} />)
      
      component.find(FilmeListItem).first().simulate('click')    

      expect(handleClick).toHaveBeenCalledWith(filme)
  })

})