import { Personagem, getPersonagens } from "./filmes-service";
import { useState, useEffect } from "react";

type Characters = {
    personagens: Personagem[],
    isLoading: boolean
}

export default function usePersonagens(filmeId: number): Characters {
    const [personagens, setPersonagens] = useState<Personagem[]>([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const fetchData = async () =>  {
            setIsLoading(true)
            const result = await getPersonagens(filmeId)
            setPersonagens(result)
            setIsLoading(false)
        }

        fetchData()
    }, [filmeId])

    return { personagens, isLoading }
}