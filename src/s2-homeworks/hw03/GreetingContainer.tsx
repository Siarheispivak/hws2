import React, {ChangeEvent, FocusEvent, FocusEventHandler, KeyboardEvent, MouseEvent, useState} from 'react'
import Greeting from './Greeting'
import {pureAddUserCallback, UserType} from './HW3'

type GreetingContainerPropsType = {
    users: UserType[] // need to fix any
    addUserCallback: (name:string)=>void // need to fix any
}

export const pureAddUser = (name: string, setError:(error: string)=>void , setName: (value:string)=>void, addUserCallback:(name:string)=>void) => {
    // если имя пустое - показать ошибку, иначе - добавить юзера и очистить инпут

    if(name !== ''){
       addUserCallback(name);
    }else{
        setError("Ошибка! Введите имя!")
        console.log(setError)
    }
    setName("");

}

export const pureOnBlur = (name: string, setError: (error: string)=>void) => { // если имя пустое - показать ошибку
    if(name === ''){
        setError("Ошибка! Введите имя!")
    }
}

export const pureOnEnter = (e:KeyboardEvent<HTMLInputElement>, addUser: (e:MouseEvent<HTMLButtonElement>) => void) => { // если нажата кнопка Enter - добавить
    if (e.key === 'Enter') {
    // addUser.name

}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({
    users,
    addUserCallback,
}) => {
    // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string>('') // need to fix any

    const setNameCallback = (e:ChangeEvent<HTMLInputElement>) => { // need to fix any
        // setName() // need to fix
            setName(e.currentTarget.value)
        console.log(name)

            error && setError('')
        }

    const addUser = () => {
        pureAddUser(name, setError, setName, addUserCallback)
    }

    const onBlur = (e:FocusEvent<HTMLInputElement>) => {
        pureOnBlur(name, setError)
    }

    const onEnter = (e:KeyboardEvent<HTMLInputElement>) => {
        pureOnEnter(e, addUser)
    }

    const totalUsers = 0 // need to fix
    const lastUserName = 'some name' // need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            onBlur={onBlur}
            onEnter={onEnter}
            error={error}
            totalUsers={totalUsers}
            lastUserName={lastUserName}
        />
    )
}

export default GreetingContainer
