import React from 'react'

function Card({ data }) {
    
    const {
        location,
        current,
    } = data;

    return (
        
        <div className='bg-white p-6 mt-10 rounded-lg shadow-md ' >
            <div className='text-center' >
                <span className='block text-xl font-bold text-slate-700' >{location.name}</span>
                <span className='text-slate-400 text-cm font-medium' >{`${location.region}, ${location.country}`}</span>
            </div>

            <div className='font-bold text-slate-700 flex justify-center mt-4 mb-2 '>
                <span className='text-8xl' >{current.temp_c}</span>
                <span className='text-2xl mt-3 ' >ºC</span>
            </div>

            <div className='text-center flex flex-col items-center justify-center'>
                <img src={current.condition.icon} alt="weather icon" />
                <span className='font-medium text-slate-700' >{current.condition.text}</span>
            </div>
        </div>

    )
}

export default Card
