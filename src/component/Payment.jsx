import '../assets/Payment.css'
function Payment(){
    return(
        <>
        <div className="payment-Container">
            <form action="">
                        <h1>Payments</h1>
                    <p>Buy your Tickets and Book Now</p>
            
            <div className="Visitors">
                <label>Number of Visitors :</label>
                <input type="Number"/>
            </div>

            <div className="Date-Visit">
                <label>Date : <input type="Date" name="date"/></label>
            </div>

            <div className="Country">
                <label for="Country">Select your Country</label>
                <select name="Country" id="Country">
                    <option value="Saarc">SAARC</option>
                    <option value="Foreign">Foreign</option>
                    <option value="Chinese">Chinese</option>
                    <option value="Indian">Indian</option>
                    <option value="Local">Local</option>
                    </select>

                <div className="Price">
                <label>Total Pricing</label>
                <input type="Number"/>
                </div>

                <button>Pay via Esewa</button>
            </div>
            </form>
        </div>
        </>
    )
}
export default Payment;