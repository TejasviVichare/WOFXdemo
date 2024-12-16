import React from 'react';


const ButtonComponent = () => {
  return (
    <div className="button-container">
      <div>
        <center style={{ background: '#2b2b2b', borderRight: '1px solid transparent',  }}>
          <a href="">REGISTER TO</a>
        </center>
      </div>
      <div>
        <center style={{borderBottom:"2px solid rgba(0,0,0,0.2)"}} className="a">
          <a href="https://www.bee2bee.asia/wofx/exhibitor-enquiry">EXHIBIT</a>
        </center>
      </div>
      {/* <div>
        <center   className="a">
          <a href="https://www.bee2bee.asia/wofx/buyer-registration">VISIT</a>
        </center>
      </div> */}
      <div>
        <center   className="a">
          <a href="#">VISIT</a>
        </center>
      </div>
    
    </div>
  );
};

export default ButtonComponent;
