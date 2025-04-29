import { useState, useEffect } from 'react';
import { QRCodeSVG } from 'qrcode.react'; // Correct import
import { jsPDF } from "jspdf";
import '../assets/Payment.css';

const Payment = ({ placeData }) => {
  const [visitorCount, setVisitorCount] = useState(1);
  const [country, setCountry] = useState('Saarc');
  const [totalPrice, setTotalPrice] = useState();
  const [formSubmitted, setFormSubmitted] = useState(false); 
  useEffect(() => {
    if (placeData) {
      calculateTotalPrice(placeData, visitorCount, country);
    }
  }, [placeData, visitorCount, country]); 

  const calculateTotalPrice = (place, visitorCount, country) => {
    let price = 0;
    switch (country) {
      case 'Foreign':
        price = place.foreignNation;
        break;
      case 'Saarc':
        price = place.saarcNational;
        break;
      case 'Chinese':
        price = place.chinese;
        break;
      case 'Indian':
        price = place.saarcNational;
        break;
      case 'Local':
        price = place.nepalese;
        break;
      default:
        price = place.saarcNational;
    }
    setTotalPrice(price * visitorCount);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true); 
  };

  const handleGeneratePDF = () => {
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text("Payment Receipt", 20, 20);

    doc.setFontSize(12);
    doc.text(`Place: ${placeData.placeName}`, 20, 40);
    doc.text(`Visitors: ${visitorCount}`, 20, 50);
    doc.text(`Country: ${country}`, 20, 60);
    doc.text(`Total Price: Rs. ${totalPrice}`, 20, 70);

    const qrCodeCanvas = document.getElementById("qrCodeCanvas");
    const qrImage = qrCodeCanvas.toDataURL("image/png");
    doc.addImage(qrImage, "PNG", 20, 80, 50, 50);

    doc.save("payment_receipt.pdf");
  };

  if (!placeData) return <div>Loading...</div>;

  return (
    <div className="payment-Container">
      {!formSubmitted ? (
        <form onSubmit={handleSubmit}>
          <h1>Payments</h1>
          <p>Buy your Tickets and Book Now</p>

          <div className="Visitors">
            <label>Number of Visitors:</label>
            <input 
              type="number" 
              value={visitorCount} 
              onChange={(e) => setVisitorCount(Number(e.target.value))} 
              min="1" 
            />
          </div>

          <div className="Date-Visit">
            <label>Date:</label>
            <input type="date" name="date" />
          </div>

          <div className="Country">
            <label htmlFor="Country">Select your Country:</label>
            <select 
              name="Country" 
              id="Country" 
              value={country} 
              onChange={(e) => setCountry(e.target.value)}
            >
              <option value="Saarc">SAARC</option>
              <option value="Foreign">Foreign</option>
              <option value="Chinese">Chinese</option>
              <option value="Indian">Indian</option>
              <option value="Local">Local</option>
            </select>
          </div>

          <div className="Price">
            <label>Total Pricing:</label>
            <input type="number" value={totalPrice} readOnly />
          </div>

          <button type="submit">Pay via Esewa</button>
        </form>
      ) : (
        <div className="paymentSuccess">
          <h2>Payment Successful!</h2>
          <p>Your total amount is Rs. {totalPrice} for {visitorCount} visitors from {country}.</p>
          
          {/* QR code */}
          <div className="qr-code">
            <QRCodeSVG id="qrCodeCanvas" value={`http://payment-link.com/${placeData.id}?amount=${totalPrice}`} />
          </div>

          {/* Button to download QR as PDF */}
          <button onClick={handleGeneratePDF}>Download QR as PDF</button>
        </div>
      )}
    </div>
  );
};

export default Payment;