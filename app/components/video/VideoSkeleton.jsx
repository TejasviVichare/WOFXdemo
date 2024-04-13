import Timer from '../timer/Timer.jsx'

function VideoSkeleton() {
    return (
        <>
            <div className="videoskeleton text-slate-300" style={{height:"100vh"}}>
            <center><h1 style={{fontSize:"48px", fontWeight:'800'}}> <span className="wofxHead">WOFX</span> - World Furniture Expo</h1></center>
            <center><h3 style={{fontSize:"34px", fontWeight:'800'}}>12 - 13 - 14, December, &nbsp; 2024</h3></center>
            <p>&nbsp;</p>
            <Timer />
            <p>&nbsp;</p>
            <div className="buyerExhibitor md:flex md:flex-row flex-col">
                <a href="/buyer">Buyer Registration</a>  
                <a href="/buyer">Exhibitor Registration</a>
            </div>
            </div>
        </>
    )
}

export default VideoSkeleton