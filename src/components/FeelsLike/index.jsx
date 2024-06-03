export const FeelsLike = ({data}) => {
    const degFtoC = Math.floor((data.main.feels_like - 32) * 5/9);
    return(
        <div>
            <span>Feels Like </span>
            {data.main ? <span className="font-bold">{degFtoC}°C </span> : null}
        </div>
    )
}