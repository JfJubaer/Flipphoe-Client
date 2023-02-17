import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../Context/AuthProvider";

const Modal = ({ p }) => {
  const {
    name,
    picture,
    resalePrice
  } = p;
  const { user } = useContext(AuthContext);
  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const name = form.name.value;
    // console.log(email, name);
    const booking = {
      email,
      name,
      picture,
      price:
        resalePrice * 1
    }
    fetch('https://server-jfjubaer.vercel.app/orders', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(booking)
    })
      .then(res => res.json())
      .then(data => { })
    toast.success('successfully booked, please close the modal')
    form.reset();
  };
  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">Booking</h3>
          <form
            onSubmit={handleBooking}
            className="grid grid-cols-1 gap-3 mt-10"
          >
            <input
              type="text"
              name="name"
              defaultValue={name}
              disabled
              className="input w-full input-bordered "
            />

            <input
              type="text"
              defaultValue={user?.displayName}
              disabled
              placeholder="Your Name"
              className="input w-full input-bordered"
            />
            <input
              name="email"
              type="email"
              defaultValue={user?.email}
              disabled
              placeholder="Email Address"
              className="input w-full input-bordered"
            />
            <input
              name="phone"
              type="text"
              placeholder="Phone Number"
              className="input w-full input-bordered"
            />
            <input
              name="location"
              type="text"
              placeholder="Location"
              className="input w-full input-bordered"
            />
            <br />
            <input
              className="btn btn-accent w-full"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
