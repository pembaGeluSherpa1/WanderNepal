import "../assets/VisitList.css"
function VisitList(){
    return(
        <>
        <div className="Visit-Container">
        <div className="visit-section">
        <div className="Box1">
            <img src="https://images.squarespace-cdn.com/content/v1/5b735348266c075124b0ffb3/1568373825992-U478GCHF49RQN21KOJLW/Boudhanath_121127-087.jpg?format=1000w" alt="Boudha_img"/>
        </div>
        <div className="Box2">
            <h1>Description</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique cumque quae iure ad veniam sit exercitationem eligendi quisquam, iste voluptatibus, repudiandae id facilis minus, animi impedit fugit voluptatem quos nostrum possimus suscipit magni eaque eum nobis placeat? Nesciunt ad omnis, labore illo officia nam provident obcaecati voluptatibus doloremque, beatae recusandae harum voluptate aspernatur architecto aperiam. Omnis dignissimos alias quae adipisci provident assumenda ullam voluptatum minima, aliquid magni, maxime quisquam quo porro. Dolore laborum earum inventore illo! Corporis iusto sit a pariatur consequatur consequuntur, amet, voluptatem cupiditate adipisci saepe id quia. Aut neque nostrum modi sint reprehenderit excepturi dolorem architecto minus?</p>
            <p>Location: </p>

        </div>
        <div className="Box3">
            <h3>Price</h3>
            <p>Foreign Countries    :    Nrs.400</p>
            <p>SAARC Countries  :   Nrs.100</p>
            <p>Chinese  :     Nrs.400</p>
            <button className="Book-btn">Book Ticket</button>
            <p>No   Refunds</p>

        </div>
        </div>
        </div>
        </>
    )
}
export default VisitList;