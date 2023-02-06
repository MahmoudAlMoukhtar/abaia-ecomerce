import React, {useState, useEffect} from "react";
import {saveShippingAddress} from "../../services/shippingService";
// Declaring outside component to avoid recreation on each render
const emptyAddress = {
  city: "",
  country: "",
};

const STATUS = {
  IDLE: "IDLE",
  SUBMITTING: "SUBMITTING",
  SUBMITTED: "SUBMITTED",
  COMPLETED: "COMPLETED",
};

function CheckoutPage({emptyCart}) {
  //state management
  const [address, setAddress] = useState(emptyAddress);
  const [status, setStatus] = useState(STATUS.IDLE);
  const [saveError, setSaveError] = useState(null);
  const [touche, setTouche] = useState({});
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    (async () => {
      await fetch("https://restcountries.com/v3.1/all")
        .then(res => res.json())
        .then(data => {
          const dataMpaed = data.map(c => c.name);
          const dataSorted = dataMpaed.sort((a, b) => {
            if (a.common > b.common) {
              return 1;
            } else if (a.common < b.common) {
              return -1;
            } else {
              return 0;
            }
          });
          setCountries(dataSorted);
        });
    })();
  }, []);

  //console.log(countries);

  //Derived state
  const errors = getErrors(address);
  const isValid = Object.keys(errors).length === 0;

  function handleChange(e) {
    e.persist();
    setAddress(curAddress => {
      return {
        ...curAddress,
        [e.target.id]: e.target.value,
      };
    });
  }

  function handleBlur(event) {
    const {id} = event.target;
    setTouche(curTouche => {
      return {...curTouche, [id]: true};
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus(STATUS.SUBMITTING);
    if (isValid) {
      try {
        await saveShippingAddress(address);
        emptyCart();
        setStatus(STATUS.COMPLETED);
      } catch (e) {
        setSaveError(e);
      }
    } else {
      setStatus(STATUS.SUBMITTED);
    }
  }

  function getErrors(address) {
    const result = {};
    if (!address.city) result.city = "City is  required";
    if (!address.country) result.country = "Country is required";
    return result;
  }

  if (saveError) throw saveError;
  if (status === STATUS.COMPLETED)
    return (
      <h1 className="font-bold text-center text-[100px] mt-10">
        <span className="text-green-900">Thanks </span>
        for shopping!!!
      </h1>
    );

  return (
    <React.Fragment>
      <div className="bg-green-800 py-12">
        <h1 className="animate__animated animate__wobble text-2xl md:text-5xl sm:text-4xl font-semibold text-white text-center">
          Chackout Page
        </h1>
      </div>
      <section className="flex flex-col justify-center items-center my-40 px-8">
        <div className="flex flex-col w-[100%]">
          <h1 className="text-center font-bold">Shipping Info</h1>
          {!isValid && status === STATUS.SUBMITTED && (
            <div role="alert">
              <p className="font-bold text-xl text-red-600">
                Please fix the following errors:
              </p>
              <ul>
                {Object.keys(errors).map((keyObj, index) => {
                  return (
                    <li key={keyObj}>{`${index + 1}- ${errors[keyObj]}`}</li>
                  );
                })}
              </ul>
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="city">City</label>
              <br />
              <input
                id="city"
                type="text"
                value={address.city}
                onBlur={handleBlur}
                onChange={handleChange}
                className="border-2 border-gray-600 rounded w-full py-4"
              />

              <p role="alert" className="text-red-800">
                {(touche.city || status === STATUS.SUBMITTED) && errors.city}
              </p>
            </div>

            <div>
              <label htmlFor="country">Country</label>
              <br />
              <select
                id="country"
                value={address.country}
                onBlur={handleBlur}
                onChange={handleChange}
                className="border-2 border-gray-600 rounded w-full py-4 cursor-pointer"
              >
                <option value="">Select Country</option>
                {countries.map(c => (
                  <option value={c.common} key={c.common}>
                    {c.common}
                  </option>
                ))}
              </select>
              <p role="alert" className="text-red-800">
                {(touche.country || status === STATUS.SUBMITTED) &&
                  errors.country}
              </p>
            </div>

            <input
              type="submit"
              className="bg-gray-400 text-white w-full cursor-pointer rounded mt-4 py-4 hover:bg-green-400"
              value="Save Shipping Info"
              disabled={status === STATUS.SUBMITTING}
            />
          </form>
        </div>
      </section>
    </React.Fragment>
  );
}
export default CheckoutPage;
/* 


*/
