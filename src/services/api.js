const KEY = '523f009c7ae54584a2d175029220709';

const fetchData = async(city) => {
    const url = `http://api.weatherapi.com/v1/current.json?key=${KEY}&q=${city}&aqi=no`
    
    const fetchResponse = await fetch(url)
    const data = await fetchResponse.json()

    return data
}

export default fetchData