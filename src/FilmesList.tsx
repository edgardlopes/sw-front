import React from 'react';
import { Filme } from './filmes-service';
import { FilmeListItem } from './FilmeListItem';

type FilmeListProps = {
  className?: string
  handleFilmeClick: any
  filmes: Filme[]
}

export function FilmesList (props: FilmeListProps) {

  const {className, handleFilmeClick, filmes} = props

  return (
    <div className={className}>
      <div className="list-group">
        {filmes.map(filme => (
          <FilmeListItem 
            key={filme.id} 
            filme={filme}
            handleClick={() => handleFilmeClick(filme)}  
          />
        ))}
      </div>
    </div>
  )
}
