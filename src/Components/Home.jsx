import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'

const Home = () => {
    const [roomId, setRoomId] = useState();

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        e.stopPropagation();

        navigate(`/room/${roomId}`);
    }

  return (
    <section className='h-[720px] flex items-center justify-center text-slate-400'>
        <form onSubmit={handleSubmit} className='border-2 border-gray-700 p-14 rounded-xl shadow-sm shadow-gray-700 text-center'>
            <h1 className='text-3xl pb-4 font-semibold'>Enter the Room Id</h1>
            <input type='text' onChange={(e) => setRoomId(e.target.value)} placeholder='Room Id' className='p-2 mb-7 text-gray-700 rounded-xl' /> <br/>
            <button className='bg-gray-700 p-2 px-7 rounded-full text-gray-200'>Enter Room</button>
        </form>
    </section>
  )
}

export default Home
