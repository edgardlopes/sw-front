import { shallow, configure, mount } from 'enzyme';
import React from 'react';

import Adapter from 'enzyme-adapter-react-16';
import { App } from './App';
import { Filme, getFilmes } from './filmes-service';
import { act } from 'react-dom/test-utils';

configure({ adapter: new Adapter() });

jest.mock('./filmes-service')

describe('App', () => {

    // beforeEach(() => {
    //   jest.resetAllMocks();
    // }); 

    it('deve exibir o titulo', () => {
        const component = shallow(<App  />)
        expect(component.find('.navbar-brand').text()).toBe('Awesome StarWarsPedia')
    })

    it('deve exibir o alert quando nao tiver nenhum filme selecionado', () => {
      const component = shallow(<App  />)
      expect(component.find('Alert').exists()).toBeTruthy()
    })

    // it('deve exibir FilmeDetalhe quando tiver filme selecionado', () => {
    //   const filmes: Filme[] = [{
    //     abertura: "abertura legal",
    //     id: 1,
    //     lancamento: new Date('2019-01-01'),
    //     nome: 'teste nome'
    //   }];
      
    //   (getFilmes as jest.Mock).mockResolvedValue(filmes);

    //   const component = mount(<App  />);
      
    //   act(() => {
    //     component.find('FilmeListItem').first().simulate('click');
    //   })

    //   expect(component.find('FilmeDetalhe').exists()).toBeTruthy();
    //   // console.log(component.find('FilmeListItem'))
    // })
})