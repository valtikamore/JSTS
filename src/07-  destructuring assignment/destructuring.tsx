import React from "react";


export type lessonType ={
    title:string
    name?:string
}

export type ManType = {
    name:string
    age:number
    lessons:Array<lessonType>
    address: {
        street: {
            title: string
        }
    }
}
type PropsType = {
    title:string
    man:ManType
    food:Array<string>
    car:{model:string}
}
// export const ManComponent:React.FC<PropsType> = ( {title,man,...props} ) => {
export const ManComponent:React.FC<PropsType> = ( props ) => {
    const{title,man,...restProps} = props
    return (
        <div>
            <h1>{title}</h1>
            <hr/>
            <div>
                {man.name}
            </div>
            <div>{restProps.car}</div>
        </div>
    )
}