import React, { useState, useEffect } from 'react'
import Loader from "./Loader"
import "./Launchpads.css"

const baseUrl = "https://api.spacexdata.com/v4/launchpads"

const Launchpads = () => {

  const [userData, setUserData] = useState({});
  const [isLoaded, setisLoaded] = useState(false)

  useEffect(() => {
    getLaunchpadWithFetch();
  }, []);

  const getLaunchpadWithFetch = async () => {
    const response = await fetch(baseUrl);
    const jsonData = await response.json();
    setUserData(jsonData);
    setisLoaded(true);
  }; 
  let a;
  return (
    (!isLoaded) ? <Loader/> :
    <>
      <div className = "intro">
        <h2 style={{color: "black", marginBottom: "20px"}}>Launchpads</h2>
        <div>
          {userData?.map((data)=> (
            <>
              <div className=''>
                <h3 style={{color: "black", marginTop: "25px", marginBottom: "25px"}}>{data.name}</h3>
                <p>{data.details}</p>
                <h3><strong>Status : </strong>{data.status}</h3>
                <div className = "d-flex justify-content-center">
                 <img style = {{marginTop: "20px"}} src = {data.images.large} alt = "" className = "images"/>  
                </div>
                {/* {a = data.launches.slice(0,3)} */}
                <div className = "d-flex justify-content-center">
                  {data.launches.slice(0,3).map((id, key)=> {
                    let url = "https://inspace.info/launch/"+id;
                    console.log(url);
                    return (
                      <>
                        <button className = "btn btn-primary m-2"><a href ={url}>Launch {key}</a></button>
                      </>
                    )
                  })}
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  )
}

export default Launchpads