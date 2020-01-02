import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { FilmeListItem } from './FilmeListItem';
import { Filme } from './filmes-service';

describe('FilmeListItem', () => {
    it('deve exibir o item da lista corretamente', () => {
        const filme: Filme = {
            abertura: "abertura",
            id: 1,
            lancamento: new Date('2019-01-01'),
            nome: 'nomeFilme'
        }

        const handleClick = jest.fn()

        const { getByTestId } = render(<FilmeListItem filme={filme}  handleClick={handleClick}/>)
        
        expect(getByTestId('filme-list-item').textContent).toBe(filme.nome)

    })

    it('deve chamar o callback de click corretamente', () => {
        const filme: Filme = {
            abertura: "abertura",
            id: 1,
            lancamento: new Date('2019-01-01'),
            nome: 'nomeFilme'
        }

        const handleClick = jest.fn()
        const { getByTestId } = render(<FilmeListItem filme={filme}  handleClick={handleClick}/>)
        
        fireEvent.click(getByTestId('filme-list-item'))

        expect(handleClick).toHaveBeenCalledTimes(1)    
    })

})