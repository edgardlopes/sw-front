import React from 'react';
import { Alert } from './Alert';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'


describe('Alert', () => {
    it('deve exibir o alerta corretamente', () => {
        const msg = 'teste'
        const type = 'info'
        const { getByTestId } = render(<Alert msg={msg} type={type}/>)
        expect(getByTestId('alert').textContent).toBe('teste')
        expect(getByTestId('alert').classList.contains('alert-info')).toBeTruthy()
    })

    it('quando nao passar tipo, o tipo padrão é "default"', () => {
        const msg = 'teste'
        const { getByTestId } = render(<Alert msg={msg} />)
        expect(getByTestId('alert').classList.contains('alert-default')).toBeTruthy()
    })
})