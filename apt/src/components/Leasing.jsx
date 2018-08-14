import React from 'react';
import "../App.css";

const Leasing = (props) => {
  return (
    <div className="leasing">
      <div><br/>
        <h1 className="title">Leasing Info</h1>
        <h2 className="subtitle">General Information</h2><br/>
          <p>We are leasing! For up-to-the-minute apartment availability, call (660) 429-6366, or stop in and let us show you around.</p>
        <h2 className="title">Office Hours</h2><br/>
          <p>Monday-Friday: 9:00 to 6:00 Sat. & Sun.: by appointment</p>
        <h2 className="title">Processing Fee</h2><br/>
          <p>Payment of a processing fee, along with a completed application, will reserve an apartment or establish your position on the priority list.</p>
          <h2 className="title">Security Deposit</h2><br/>
          <p>Security deposit is equal to one month rent, is due on the day you sign your lease.</p>
          <h2 className="title">Pets</h2><br/>
          <p>Pets welcome(Some Restrictions Apply).</p>
      </div>
      <br/>
      <div>
        <h1 className="title">Statement of Rental Policy</h1>
          <ol>
            <li><b>This property is an equal opportunity housing provider.</b> We fully comply with federal fair housing laws. We do not discriminate against any person because of race, color, religion, sex, national origin, familial status, or handicap. We also comply with state and local fair housing laws.</li>
            <li><b>Viewing an apartment.</b> A vacant apartment may be shown to a prospective resident after it has been cleaned and prepared. Prospective residents do not have to complete a visitor information card as a prerequisite to being shown an apartment. Prospective residents may be shown a model, particularly if the desired style of apartment is unavailable.</li>
            <li><b>Apartment availability.</b> Apartments are available to lease when they become vacant. An apartment may also become available when an application is denied or when an applicant cancels his/her move-in. An apartment may be held for a prospective resident for two weeks upon the completion of a rental application and payment of a Processing Fee or Credit Check Fee. If a move-in date is greater than two weeks from the date of application, the prospective resident's name shall be placed on a priority list.</li>
            <li><b>Occupancy guidelines.</b>
               <ul>
                 <li>One bedroom - 2 people </li>
                 <li>Two bedroom - 4 people</li>
               </ul>
               Due to limited parking and building system capacity, the following occupancy guidelines have been established. When applying these standards, an infant will not be considered an occupant until reaching the age of 12 month When applying these standards, an infant will not be considered an occupant until reaching the age of 12 months.</li>
            <li><b>Pets.</b> Pets are allowed at the community (Some Restrictions Apply).</li>
            <li><b>Rental criteria.</b>
              <ul>
                <li>Each applicant is required to complete a lease application and pay a nonrefundable Processing Fee or Credit Check Fee. </li>
                <li>An applicant cannot pose a threat to the safety of others.</li>
                <li>Any outstanding balance with the local electric utility must be paid prior to move-in.</li>
                <li>Modifications to our business practices required by third-party payers may not be acceptable.</li>
                <li>Questions regarding this policy or specific applicant screening decisions can be addressed by contacting the Property Manager at the address below.</li>
                  <div className="contactinfo">
                    <h3><b>Dellwood Apartments</b></h3><br/>
                    <h3>514-D Anderson St.</h3><br/>
                    <h3>Warrensburg, MO 64093</h3><br/>
                    <h3>Phone: (660) 429-6366</h3><br/>
                  </div>
              </ul>
            </li>
          </ol>
      </div>
    </div>
  );
};

export default Leasing;
