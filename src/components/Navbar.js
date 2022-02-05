import React from 'react'

const Navbar = ({changeWeather, changeRegion}) => {
    return (
        <div className="row">
            <div className="col-md-6">
            <h1 className="title">Weather-app</h1>
            </div>
            
            <div className="col-md-6 ml-8 mt-3">
            <form className="region" onSubmit={(e) => {changeWeather(e)}}>
                <input className="regioninput" placeholder="Enter Location" onChange={(e)=>{changeRegion(e.target.value)}} />
            </form>
            
            </div>
    </div>
    )
    
}



export default Navbar
