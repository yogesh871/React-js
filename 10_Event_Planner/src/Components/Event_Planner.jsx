import React, { useState, useEffect } from "react";


const getStorageData = () => {
    const event = JSON.parse(localStorage.getItem("event"));
    return event ? event : [];
  };

const EventPlanner = () => {
  const initialFormState = {
    id: "",
    title: "",
    desc: "",
    date: "",
    location: "",
    image: "",
  };

  const [inputForm, setInputForm] = useState(initialFormState);
  const [storageData, setstorageData] = useState(getStorageData);
  const [isEdit, setIsEdit] = useState(false);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInputForm({ ...inputForm, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if(isEdit) {
   setstorageData((events) => 
    events.map((event) => event.id === inputForm.id ? inputForm : event)
   )
   setIsEdit(false)
    }
    else {

        let id = Math.floor(Math.random() *10000)
        const newEvent = { ...inputForm, id };
        setstorageData([...storageData, newEvent]);
    }
    setInputForm(initialFormState);


  };


  const handleEdit = (event) => {
    console.log(event);
    setInputForm(event)
    setIsEdit(true)
  }

  const handleDelete  = (id) => {
    setstorageData(storageData.filter((event) => event.id !== id));

  }

  useEffect(() => {
    localStorage.setItem ("event" , JSON.stringify(storageData))  
  }, [storageData]);


  return (
    <div className="min-h-full px-6 py-12 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-gray-900">Plan Your storageData</h2>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md mb-10 w-2/4 mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            {["title", "desc", "date", "location", "image"].map((field) => (
              <div key={field}>
                <label className="block text-sm font-medium text-gray-900 capitalize">
                  {field === "desc" ? "Event Description" : field.replace("image", "Image URL")}
                </label>
                <div className="mt-2">
                  {field === "desc" ? (
                    <textarea
                      name="desc"
                      value={inputForm.desc}
                      rows="3"
                      className="w-full rounded-md px-3 py-1.5 border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
                      onChange={handleInput}
                    ></textarea>
                  ) : (
                    <input
                      name={field}
                      type={field === "date" ? "date" : "text"}
                      value={inputForm[field]}
                      onChange={handleInput}
                      className="w-full rounded-md px-3 py-1.5 border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
                    />
                  )}
                </div>
              </div>
            ))}

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-500"
            >
            {isEdit ?  "Update event Plan" : "Make Event Plan"}
            </button>
          </form>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Your Planned storageData</h3>
          {storageData.length === 0 ? (
            <div className="p-8 text-center bg-white rounded-lg shadow">
              <p className="text-gray-500">No storageData planned yet. Add your first event!</p>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {storageData.map((event) => (
                <div
                  key={event.id}
                  className="overflow-hidden transition-all duration-300 bg-white rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between"
                >
                  <div className="relative h-48 overflow-hidden group">
                    <img
                      src={
                        event.image ||
                        "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                      }
                      alt={event.title}
                      className="object-cover w-full h-full transition-all duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

                    <div className="absolute top-3 left-3 bg-blue-500 text-white px-2 py-1 rounded-md text-xs font-medium flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3 w-3 mr-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      {event.date}
                    </div>

                    <div className="absolute bottom-3 left-3 text-white">
                      <div className="flex items-center mb-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 mr-1 text-yellow-300"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        <span className="text-sm font-medium">{event.location}</span>
                      </div>
                      <h3 className="text-lg font-bold">{event.title}</h3>
                    </div>

                    <div className="absolute top-2 right-2 flex space-x-2">
                      <button
                        onClick={() => handleEdit(event)}
                        className="p-2 bg-white rounded-full text-indigo-600 hover:bg-indigo-100 shadow"
                        aria-label="Edit event"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                          />
                        </svg>
                      </button>
                      <button
                        onClick={() => handleDelete(event.id)}
                        className="p-2 bg-white rounded-full text-red-600 hover:bg-red-100 shadow"
                        aria-label="Delete event"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>

                  <div className="p-6 relative">
                    <p className="text-gray-600 line-clamp-3 mb-4">{event.desc}</p>

                    <div className="flex flex-col justify-between mb-3">
                      <div className="flex items-center text-gray-700">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-red-500 mr-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center text-gray-700">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-blue-500 mr-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                        <span>{event.date}</span>
                      </div>
                    </div>
                  </div>

                  <button
                    className="w-full px-4 py-2 text-sm font-medium text-white transition-colors duration-300 bg-indigo-600 rounded-b-md hover:bg-indigo-700 flex items-center justify-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    View Details
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventPlanner;
