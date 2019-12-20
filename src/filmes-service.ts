import axios from 'axios'

export type Filme = {
    id: number
    nome: string
    abertura: string
    lancamento: Date
}

export type Personagem = {
    nome?: string
}

export async function getFilmes() : Promise<Filme[]> {
    return axios.get('http://localhost:3000/api/v1/filmes').then(response => response.data)
}

export async function getPersonagens(filmeId: number): Promise<Personagem[]> {
    return axios.get(`http://localhost:3000/api/v1/filmes/${filmeId}/personagens`).then(response => response.data)
}