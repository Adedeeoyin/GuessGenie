import Layout from "../components/Layout";
import UseData from "../context/SharedData";
import { FaBox } from "react-icons/fa";
import { SiIconfinder } from "react-icons/si";
import delay from "../lib/Delay";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

export default function Playground() {
    const {total, guess, setGuess, isGuessing,memory, setIsGuessing,setMemory} = UseData()
    // const memory = JSON.parse(localStorage.getItem("guess"))
    const navigate = useNavigate()
    
    const handleback = ()=>{
        navigate(-1)
        setMemory([])
        setGuess('')
    }

    const handleGuess = async()=>{
        setIsGuessing(true)
        const random = Math.floor((Math.random() * +total) + 1)
        await delay(500)
        setGuess(random)
        if(memory?.length > 10){
            setMemory(memory.filter((_,i) => i !== 0 ))
        }
        setMemory(prev=>[...prev, random])
        setIsGuessing(false)
    }
  return (
    <Layout>
        <div className="max-w-[350px] w-[80vw] h-[400px] bg-zinc-300 text-black">
            <div className=" w-full h-1/5 border-b border-black p-2 flex flex-col">
                <div className="flex gap-1">
                    {
                    memory?.map((mem,i)=>{
                        return(
                            <span
                             key={i}
                             className="bg-black text-white text-center rounded-full w-6 h-6"
                             >{mem}</span>
                        )
                    })
                    }
                    </div>
                {guess && <span>{guess}</span>}
            </div>
            <div className="text-black flex gap-1 p-1 flex-wrap">
                {
                    Array(+total)
                    .fill('box')
                    .map((box,i)=>{
                        return (
                            <div key={i} className="flex-1">
                                <FaBox
                                size={32}
                                 className={`w-full ${guess == (i+1)? 'text-green-800':null}`}/>
                            </div>
                        )
                    })
                }
            </div>

            <div
                onClick={handleGuess}
                className="flex flex-col items-center mx-auto mt-24">
                <SiIconfinder
                className={`cursor-pointer ${isGuessing && 'animate-spin'}`}
                size={40}/>
                Guess👀
            </div>
        </div>
        <IoArrowBackCircleSharp
        onClick={handleback}
         size={36}
          className="cursor-pointer"/>
        
    </Layout>
  )
}
