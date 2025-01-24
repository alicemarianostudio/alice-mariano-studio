"use client";
import { useState, useEffect } from "react";

export default function Services() {
  const [step, setStep] = useState(1); // Track current step
  const [service, setService] = useState(""); // Track selected service
  const [calendlySubmitted, setCalendlySubmitted] = useState(false); // Track Calendly submission

  // Handle service selection
  const handleServiceChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setService(event.target.value);
  };

  // Proceed to the next step
  const handleNextStep = () => {
    if (service) {
      setStep(2);
    }
  };

  return (
    <main className="services container mx-auto min-h-screen max-w-2xl px-10">
      <div className="stepper flex justify-between items-center w-full my-10">
        <div className="flex flex-col items-center">
          <button
            className={`stepper-dot rounded-full w-10 h-10 flex justify-center items-center ${
              step >= 1 ? "bg-black text-white" : "bg-gray-600 text-gray-600"
            }`}
            onClick={() => setStep(1)} // Go to step 1
          >
            1
          </button>
        </div>

        <div className="flex flex-col items-center">
          <button
            className={`stepper-dot rounded-full w-10 h-10 flex justify-center items-center ${
              step >= 2 ? "bg-black text-white" : "bg-gray-600 text-gray-600"
            }`}
            onClick={() => setStep(2)} // Go to step 2
            disabled={!service} // Disable going to step 2 unless service is selected
          >
            2
          </button>
        </div>

      </div>

      {/* Step 1 */}
      {step === 1 && (
        <div className="text-center py-5">
          <h1 className="mb-3 accent-font text-2xl">Book a Call with the Studio</h1>
          <p className="mb-6">
            Whether you&apos;re looking for inspiration, advice, or have a
            collaboration idea, let&apos;s connect and bring your vision to life.
            <br /><br />
            Choose the service that best suits you.
          </p>
          <select
            id="service"
            className="border border-gray-300 rounded-lg p-2 mb-6"
            onChange={handleServiceChange}
            value={service}
          >
            <option value="" disabled>
              Select a service
            </option>
            <option value="Home Decor">Home Decor</option>
            <option value="Product / Brand Collaboration">
              Product / Brand Collaboration
            </option>
          </select>

          {/* Submit Button */}
          <button
            className={`p-3  text-white w-full ${
              service ? "bg-black" : "bg-gray-600 cursor-not-allowed"
            }`}
            disabled={!service} // Disable button if no service is selected
            onClick={handleNextStep}
          >
            Schedule call
          </button>
        </div>
      )}

      {/* Step 2 */}
      {step === 2 && (
        <div className="text-center py-5">
          <h1 className="mb-3">{service}</h1>
          {/* Calendly widget */}

          {service == "Home Decor" ? (
            <>
              <iframe
                src="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0uzR7iUblZLIqfRwnPLvnjgIc0QLJi216-w3O6KQS7TRrtT-V-x3IPwbv7LDE-pYzvuAXom7bE?gv=true"
                width="100%"
                height="800"
                frameBorder="0"
              ></iframe>
            </>
          ) : (
            <iframe
              src="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0GGc5bkCTyMhYs_gOtRAZd2J0RheGBzSbD8SkPVHlWbuVWcq1qktdfTyhAA6jxVmKL1j9TnLH1?gv=true"
              width="100%"
              height="800"
              frameBorder="0"
            ></iframe>
          )}

          {/* Back button */}
          <button
            className="mt-4 p-2 bg-gray-200 hover:bg-gray-300 rounded"
            onClick={() => setStep(1)}
          >
            Go Back
          </button>
        </div>
      )}

      {/* Step 3 */}
      {step === 3 && (
        <div className="text-center py-5">
          <h2 className="text-2xl font-semibold mb-4">Success!</h2>
          <p>
            Thank you for booking a <strong>{service}</strong>. We look forward
            to working with you!
          </p>
          <button
            className="mt-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={() => setStep(1)}
          >
            Start Over
          </button>
        </div>
      )}
    </main>
  );
}
