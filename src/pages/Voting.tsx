import { useState, useEffect } from "react"
import VotingImage from "@/components/voting/VotingImages"
import { fetchCatImages } from "@/services/catApi"
import { CatData } from "@/lib/type"



const Voting = () => {

  const [cats, setCats] = useState<CatData[]>([])

  useEffect(()=> {
    fetchCatImages()
    .then(res => setCats(res.data))
  }, [])
 
  return (
    <section className="bg-white rounded-20 p-5 w-full dark:bg-grey_black">
      <div>
        <VotingImage catImages={cats} />
      </div>
    </section>
  )
}

export default Voting