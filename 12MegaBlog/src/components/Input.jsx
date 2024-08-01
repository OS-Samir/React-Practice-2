import React, {useId} from 'react'

const Input = React.forwardRef(function Input(
    {
        label,
        text = "text",
        className = "",
        ...props
    }, ref){
        const id = useId()
    return (
        <div className='w-full'>
            {label && <label className='block mb-1 pl-1' 
            htmlFor = {id}>
                {label}
                </label>}
        </div>
    )
})

export default Input
