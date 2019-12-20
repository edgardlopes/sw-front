import React from 'react'
import { Filme, getPersonagens, Personagem } from './filmes-service'
import { PersonagensList } from './PersonagensList'
import { Spinner } from './Spinner'

type FilmeDetalheProps = {
    className?: string
    filme: Filme
}


export function FilmeDetalhe(props: FilmeDetalheProps) {
    const {className, filme} = props

    const [personagens, setPersonagens] = React.useState<Personagem[]>([])
    const [loading, setLoading] = React.useState<boolean>(false)
    
    React.useEffect(() => {
        setLoading(true)
        getPersonagens(props.filme.id)//
            .then(setPersonagens)
            .then(() => setLoading(false))
    }, [props.filme])
    
    if(loading) {
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