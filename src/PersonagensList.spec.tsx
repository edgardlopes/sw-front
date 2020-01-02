import React from 'react'
import { Personagem } from './filmes-service'
import { render } from '@testing-library/react'
import { PersonagensList } from './PersonagensList'

describe('PersonagensList', () => {

    it('deve renderizar a lista de personagens', () => {
        const personagens: Personagem[] =[
            { nome: 'Ze pequeno' },
            { nome: 'Bátima' }
        ]

        const { getAllByTestId } = render(<PersonagensList personagens={personagens}/>)

        expect(getAllByTestId('personagem-item-list').length).toBe(2)

        // console.log(getAllByTestId('personagem-item-list')[0].innerHTML)

        expect(getAllByTestId('personagem-item-list')[0].innerHTML).toBe(personagens[0].nome)

    })

})