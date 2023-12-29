import { useEffect } from "react"
import VotingImage from "@/components/voting/VotingImages"
import { useAppSelector, useAppDispatch } from "@/app/hooks"
import { fetchCats } from "@/features/votingSlice"



const Voting = () => {

  const catImages = useAppSelector(state => state.voting.catData)

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchCats())
  }, [dispatch])
 
  return (
    <section className="bg-white rounded-20 p-5 w-full dark:bg-grey_black">
      <div>
        <VotingImage catImages={catImages} />
      </div>
    </section>
  )
}

export default Voting