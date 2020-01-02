import React, { Suspense } from 'react'
import { Filme, getPersonagens, Personagem } from './filmes-service'
import { PersonagensList } from './PersonagensList'
import { Spinner } from './Spinner'
import usePersonagens from './usePersonagens'

type FilmeDetalheProps = {
    className?: string
    filme: Filme
}

export function FilmeDetalhe(props: FilmeDetalheProps) {
    const {className, filme} = props

    const { personagens, isLoading } = usePersonagens(filme.id)
    
    if(isLoading) {
        return <Spinner />
    }
    
    return (
        <div className={className}>
            <div className="card" >
                <div className="card-body">
                    <h5 className="card-title" data-testid="filme-nome">{filme.nome}</h5>
                    <p className="card-text" data-testid="filme-abertura">{filme.abertura}</p>
                </div>
                <PersonagensList personagens={personagens} />
            </div>
        </div>
    )
}