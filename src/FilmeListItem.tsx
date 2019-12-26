import React from 'react'
import { Filme } from './filmes-service'

type FilmeListItemProps = {
    filme: Filme
    handleClick: any
}

export function FilmeListItem(props: FilmeListItemProps) {
    const {handleClick, filme} = props
    return <button className="filme-item-list list-group-item list-group-item-action" onClick={handleClick}>{filme.nome}</button>
}