import { shallow } from 'enzyme';
import React from 'react';
import { Alert } from './Alert';
import { configure } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('Alert', () => {
    it('deve exibir o alerta corretamente', () => {
        const msg = 'teste'
        const type = 'info'
        const component = shallow(<Alert msg={msg} type={type}/>)
        expect(component.find('.alert').text()).toBe('teste')
        expect(component.find('.alert').hasClass('alert-info')).toEqual(true)
    })

    it('quando nao passar tipo, o tipo padrão é "default"', () => {
        const msg = 'teste'
        const component = shallow(<Alert msg={msg} />)
        expect(component.find('.alert').text()).toBe('teste')
        expect(component.find('.alert').hasClass('alert-default')).toEqual(true)

    })
})