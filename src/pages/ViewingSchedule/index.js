import axios from "axios";
import { useEffect, useState } from "react";
import "./styles.css";

const ViewingSchedule = () => {
  const [listings, setListings] = useState(null);
  const [selectListing, setSelectListing] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    const getListings = async () => {
      try {
        const response = await axios.get("http://localhost:4000/listings");
        console.log(response.data);
        setListings(response.data);
      } catch (e) {
        console.log(e.message);
      }
    };
    getListings();
  }, []);

  const submitAppointment = (event) => {
    event.preventDefault();
    console.log(
      "Appointment made!",
      "Listing:",
      selectListing,
      "Name:",
      name,
      "Email:",
      email,
      "Phone:",
      phone,
      "Date:",
      date
    );
  };

  return (
    <div className="container-viewing-schedule">
      <h1>Viewing Schedule</h1>
      <div className="form-viewing-schedule">
        <form onSubmit={submitAppointment}>
          <select
            className="select-address"
            value={selectListing}
            onChange={(event) => setSelectListing(event.target.value)}
          >
            <option>Select listing</option>
            {listings
              ? listings.map((listing, index) => {
                  return <option key={index}>{listing.address}</option>;
                })
              : "Loading..."}
          </select>
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Name"
          />
          <input
            type="text"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Email"
          />
          <input
            type="text"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            placeholder="Phone number"
          />
          <input
            type="date"
            value={date}
            onChange={(event) => setDate(event.target.value)}
          />
          <button className="button-schedule" type="submit">
            Submit appointment
          </button>
        </form>
      </div>
    </div>
  );
};

export { ViewingSchedule };
