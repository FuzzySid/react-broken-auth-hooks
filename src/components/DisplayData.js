export default function DisplayData({deviceId,locationData}){
    return(
        <div>
            <h3>Device ID - {deviceId}</h3> 
            <h3>Location Info - 
                <div style={{color:'darkgray',display:'flex',flexDirection:'column'}}> 
                    {locationData && Object.keys(locationData).map(locationDataKey=>
                        <span key={locationDataKey} style={{marginRight:10}}>{locationDataKey} - {locationData[locationDataKey]}</span>)} 
                </div>
            </h3> 
        </div>
    )
}