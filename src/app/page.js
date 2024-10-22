'use client'

import { useEffect, useState } from "react";
import Highlights from "@/components/Highlights/Highlights";
import Recommendations from "@/components/Recommendations/Recommendations";
import getGames from "@/services/Services"

export default function Home() {
  const [games, setGames] = useState([])

  useEffect(() => {
    (async () => {
      try {
        const json = await getGames()
        const { results } = json
        setGames(results)
        console.log(results)
      } catch (error) {
        console.log(error)
      }
    })()
  }, [])


  return (
    <div>
      <Highlights />
      <Recommendations />
    </div>
  );
}
