import React, {ChangeEvent, MouseEvent} from 'react'


export const User = () => {


    const deleteUser = (event:MouseEvent<HTMLButtonElement>) => {
        console.log(event.currentTarget.name)
    }
    const onNameChanged = () => {
        console.log('name changed')
    }
    const onAgeChanged = (event:ChangeEvent<HTMLInputElement>) => {
        console.log(`age  changed + ${event.currentTarget.value}`)
    }
    const blurLost = () => {
        console.log('name changed')
    }
    return (
        <div>
            <div>
                <textarea onChange={onNameChanged} onBlur={blurLost}> Valentine</textarea>
                <input onChange={onAgeChanged} type='number'/>
            </div>
            <button onClick={deleteUser} name='one'>delete</button>
            <button onClick={deleteUser } name='two'>save</button>
        </div>
    )
}