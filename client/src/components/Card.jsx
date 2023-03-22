import React from 'react'

import { download } from '../assets'
import { downloadImage } from '../utils'

const Card = (_id) => {
    return (
        <div className="rounded-xl group relative shadow-card hover:shadow-cardhover card">
            {/* {console.log(_id)} */}
            <img 
                src={_id.photo}
                alt={_id.prompt} 
                className='w-full h-auto object-cover rounded-xl'
                />

                <div className="group-hover:flex flex-col max-h-[94.5%] hidden absolute bottom-0 left-0 right-0 bg-[#232323cc] m-2 p-4 rounded-md">
                    <p className='text-white text-md overflow-y-auto prompt'>{_id.prompt}</p>
                    
                    <div className="mt-5 flex justify-between items-center gap-2">
                        <div className="flex items-center gap-2">
                            <div className='w-7 h-7 rounded-full object-cover bg-indigo-700 flex justify-center items-center text-white text-xs font-bold'>
                                {_id.name[0]}
                            </div>
                            <p className="text-white text-sm">
                                {_id.name}
                            </p>
                        </div>
                        <button 
                        type='button' 
                        className='outline-none bg-transparent border-none'
                        onClick={() => downloadImage(_id, _id.photo)}
                        >
                            <img 
                            src={download} 
                            alt="download" 
                            className='w-6 h-6 object invert'
                            />
                        </button>
                    </div>
                </div>
        </div>
    )
}

export default Card