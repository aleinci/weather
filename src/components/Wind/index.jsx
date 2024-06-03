export const Wind = ({data}) =>{
    const mts = 0.44704
    return(
        <div>
            {data.wind ? <p className="text-xl font-semibold">{(data.wind.speed * 0.44704).toFixed(1)} M/S</p> : null}
            <p>Wind Speed</p>
        </div>
    )
}