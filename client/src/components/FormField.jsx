import React from 'react'

const FormField = ({ LabelName, type, name, placeholder, value, handleChange, isSupriseMe, handleSupriseMe }) => {
    return (
        <div>
            <div className="flex items-center gap-2 mb-2">
                <label htmlFor={name} className="block text-sm font-medium text-gray-900">
                    {LabelName}
                </label>
                {
                    isSupriseMe && (
                        <button
                            type='button'
                            onClick={handleSupriseMe}
                            className="font-semibold text-cs bg-[#ECECF1] py-1 px-2 rounded-[5px] text-[#232323] transition-all ease-in delay-75 hover:bg-gray-200"
                        >
                            Suprise Me
                        </button>
                    )}
            </div>
            <input
                type={type}
                name={name}
                id={name}
                placeholder={placeholder}
                value={value}
                onChange={handleChange}
                required
                className='bg-gray-100 border-b border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#4649ff] focus:border-b-2 focus:border-[#4649ff] outline-none block w-full p-3'
            />
        </div>
    )
}

export default FormField