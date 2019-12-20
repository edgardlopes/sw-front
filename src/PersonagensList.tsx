import React from 'react'
import { Personagem } from './filmes-service'

type PersonagensListProps = {
    personagens: Personagem[]
}

export function PersonagensList({ personagens }:PersonagensListProps) {
  
    return (
        <ul className="list-group list-group-flush">
            {renderPersonagens(personagens)}            
        </ul>
    )
}

const renderPersonagens = (personagens: Personagem[]) => 
    personagens.map(personagem => (<li key={personagem.nome} className="list-group-item personagem">{personagem.nome}</li>))