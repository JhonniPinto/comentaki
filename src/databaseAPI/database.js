import { useState, useEffect } from 'react'
import firebase from '../firebase'

export const useGetDatabase = endpoint => {
    const [data, setData] = useState({})
    useEffect(() => {
        const ref = firebase.database().ref(endpoint)
        ref.on('value', snapshot => setData(snapshot.val()))
        return () => ref.off()
    }, [endpoint])
    return data
}

export const usePushDatabase = endpoint => {
    const [state, setState] = useState('')
    const push = (data) => {
        const ref = firebase.database().ref(endpoint)
        ref.push(data, err => {
            if (err) {
                setState('ERROR')
            } else {
                setState('SUCCESS')
            }
        })
    }
    return [state, push]
}
