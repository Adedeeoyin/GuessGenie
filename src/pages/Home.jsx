import { useState } from "react"
import { useNavigate } from "react-router-dom"
import delay from "../lib/Delay"
import Layout from "../components/Layout"
import UseData from "../context/SharedData"

export default function Home() {
    const {setTotal, total} = UseData()
    const [loading, setLoading]= useState(false)
    const navigate = useNavigate()

    const handleSubmit = async()=>{
        setLoading(true)
        await delay(500)
        navigate('/playground')
        setLoading(false)
    }
  return (
        <Layout>
           { loading?<div>Loading . . .</div>
           :
            <>
            <span className="text-3xl font-bold">Total guess</span>
            <form
             onSubmit={handleSubmit}
             className="flex flex-col items-center gap-3">
                <div className="w-[150px] bg-zinc-100 rounded-md p-2 text-black">
                    <input
                    type="number"
                    value={total}
                    onChange={(e)=>setTotal(e.target.value)}
                    className="w-full outline-none border-none bg-transparent"
                    placeholder="input total guess"/>
                </div>
                <button type="submit" className="hover:bg-zinc-100 hover:text-black hover:p-2 hover:rounded-md">Confirm</button>
            </form>
            </>}
        </Layout>
  )
}
