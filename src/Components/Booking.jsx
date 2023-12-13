import PropTypes from 'prop-types';
import axios from 'axios'

function Booking(props) {

    function getBookings() {
        axios
            .get("http://localhost:3030/bookings")
            .then((response) => {
                
            })
            .catch(error => console.error(error))
    }

    return (
        
        <tr>
            <td>{props.buyername}</td>
            <td>{props.date}</td>
            <td>{props.time}</td>
            <td><button type="button" onClick={() => {
                        axios.delete("http://localhost:3030/bookings/" + props.id)
                            .then(res => { getBookings() })
                            
                            .catch(err => console.error(err));
                    }}>DELETE</button></td>
        </tr>
    );
}

Booking.propTypes = {
    time: PropTypes.string,
    date: PropTypes.string,
    buyername: PropTypes.string,
    id: PropTypes.number,
}

export default Booking;