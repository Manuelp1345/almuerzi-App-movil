
import { useEffect, useState  } from 'react' 

const useFetch = (url) => {
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
    }, [])
    return{ loading, data }
}

export default useFetch
