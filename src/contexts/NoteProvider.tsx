'use client'

import { DescriptionProps } from "@/interfaces";
import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from "react"

type NotePops = {
    tagname: string;
    description?: DescriptionProps;
}

type NoteContextProps = {
    note?: NotePops,
    setNote: Dispatch<SetStateAction<NotePops | undefined>>
}

type NoteProviderProps = {
    children: ReactNode
}

const NoteContext = createContext<NoteContextProps | undefined>(undefined)

const useNote = () => {
    const generateContext = useContext(NoteContext);
    if (!generateContext) throw new Error("PLease wrap the Context Provider in your Layout Component.")
    return generateContext
}

const NoteProvider = (props: NoteProviderProps) => {
    const { children } = props
    const [note, setNote] = useState<NotePops | undefined>(undefined)
    const value = {
        note, setNote
    }
    return (
        <NoteContext.Provider value={value} >
            {children}
        </NoteContext.Provider>
    )
}

export default NoteProvider
export {
    useNote
}