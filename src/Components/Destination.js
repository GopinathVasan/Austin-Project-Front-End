import "./DestinationStyles.css";
import DestinationData from "./DestinationData";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Austin Partnership</h1>
      <h2>Join with Young and Energetic investors.</h2>

      <DestinationData
        className="first-des"
        text="The Indian economy is in the fast-growth phase. Currently, we are the 5th largest economy. According to reports, 
      India's economy is expected to grow at 7 per cent in FY24, 
      6.5 per cent and 6 per cent in Q3 and Q4 respectively. 
      The GDP growth rate in the first three quarters of FY25 has been pegged at 6.7 per cent,
       6.5 per cent, and 6.4 per cent respectively. According to a report, 
       India's nominal GDP will rise from $3.5 trillion in 2022 to $7.3 trillion by 2030.
        This rapid expansion will position India as the second-largest economy in the Asia-Pacific region, 
        surpassing Japan. The Reserve Bank of India (RBI) has revised its forecast for India's GDP growth to 7% for FY24.
         The GDP growth rate for the first three quarters of FY25 is estimated at 6.7%, 6.5%, and 6.4%. 
         Now is the best time to make an investment with Austin Partnership. 
         Start your fantastic investment with us."
      />
    </div>
  );
};

export default Destination;
