import React from 'react';
import "../App.css"



const Features = (props) => {

  return (
    <div className="features">
      <br/><br/><br/><br/>
      <div>
        <h1 className='title'> Welcome to Dellwood Apartments </h1>
        <p>A clean, comfortable, spacious one- or two-bedroom apartment is waiting for you at Dellwood. The buildings are well maintained, the grounds expertly tended and the staff friendly and competent. </p>
        <br/>
        <p>The location is perfect! We’re situated just minutes from Central Missouri State University (CMSU), easy access to WAFB. Stop in for a personal tour. We look forward to showing you around our community! </p>
      </div>
      <div>
        <h2>Features/Amenities</h2>
          <ul>
             <li>Spacious Floor Plans With Large Walk in Closets</li>
             <li>Large Storage Room</li>
             <li>High-speed Internet and Digital Cable</li>
             <li>Gas Heat & Central Air</li>
             <li>Private Patio/Balcony</li>
             <li>Vertical and Mini-blinds</li>
             <li>Laundry Facilities</li>
             <li>Wall-to-wall Carpet</li>
             <li>On-site management</li>
             <li>24 Hours Emergency Maintenance</li>
             <li>Pets Welcome</li>
             <li>Plenty of Parking</li>
          </ul>
      </div>
    </div>
  );
};

export default Features;
