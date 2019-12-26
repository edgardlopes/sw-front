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
                    <h5 className="card-title">{filme.nome}</h5>
                    <p className="card-text">{filme.abertura}</p>
                </div>
                <PersonagensList personagens={personagens} />
            </div>
        </div>
    )
}