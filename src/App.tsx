import React, { useState, useEffect } from 'react';
import { FilmesList } from './FilmesList';
import { FilmeDetalhe } from './FilmeDetalhe';
import { Filme, getFilmes } from './filmes-service';
import { Alert } from './Alert';

export function App () {
  const [filme, setFilme] = useState<Filme | undefined>(undefined)
  const [filmes, setFilmes] = useState<Filme[]>([])

  useEffect(() => {
    getFilmes().then(setFilmes)
  }, [])

  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <span className="navbar-brand">Awesome StarWarsPedia</span>
      </nav>
      <br/>
      <div className="row">
        <FilmesList 
          filmes={filmes}
          className="col-6" 
          handleFilmeClick={setFilme} 
        />
        {
          filme ? 
          (<FilmeDetalhe 
            className="col-6" 
            filme={filme}
          />) 
          : 
          (<Alert msg="É necessario escolher um filme" type="warning"/>)
        }
      </div>
    </div>
  )
}