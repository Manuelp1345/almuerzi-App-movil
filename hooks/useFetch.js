import { useEffect, useState  } from 'react' 

const useFetch = (url, screen) => {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])
    const Api = async ()=>  {
        const response = await fetch(url)
        const datos = await response.json()

        setData(datos)
        setLoading(false)
    } 
    useEffect(()=> {
        Api()
    }, screen ?[data]:[])
    return{ loading, data }
}

export default useFetch
