import React, { useState } from 'react';

const EmailScheduler = () => {
  const [email, setEmail] = useState('');
  const [scheduleTime, setScheduleTime] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send the data to the backend
    try {
      const response = await fetch('/api/schedule-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, scheduleTime }),
      });

      if (response.ok) {
        alert('Email scheduled successfully');
      } else {
        alert('Error scheduling email');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error scheduling email');
    }
  };

  return (
    <div>
      <h1>Schedule Email</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Schedule Time:</label>
          <input
            type="datetime-local"
            value={scheduleTime}
            onChange={(e) => setScheduleTime(e.target.value)}
            required
          />
        </div>
        <button type="submit">Schedule Email</button>
      </form>
    </div>
  );
};

export default EmailScheduler;








/////////////////////////////////////////////////////////////////////////////////////////////////////////
// import React from 'react'


// function Test1() {
//   const [result, setResult] = React.useState("");

//   const onSubmit = async (event) => {
//     event.preventDefault();
//     setResult("Sending....");
//     const formData = new FormData(event.target);

//     formData.append("access_key", "00ab8fac-4028-45f8-b2b5-0a4517cfd197");

//     const response = await fetch("https://api.web3forms.com/submit", {
//       method: "POST",
//       body: formData
//     });

//     const data = await response.json();

//     if (data.success) {
//       setResult("Form Submitted Successfully");
//       event.target.reset();
//     } else {
//       console.log("Error", data);
//       setResult(data.message);
//     }
//   };
  
//   return (
//     <div>
//     <form onSubmit={onSubmit}>
//      <p>Enter the Name</p>
//      <input type='text' />
//      <p>Enter the Number</p>
//      <input type='tel' />
//      <p>Enter the message</p>
//      <textarea /> 
//      <button>submit</button>
//      {result} 
//      </form>    
//     </div>
//   )
// }

// export default Test1



















//////////////////////////////////////////////////////////////////
// import React, { useState } from 'react';

// function Form() {
//   const [formData, setFormData] = useState({ name: '' });
//   const [errors, setErrors] = useState({ name: '' });

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const newErrors = {};

//     if (!formData.name) {
//       newErrors.name = 'Name is required';
//     }

//     if (Object.keys(newErrors).length > 0) {
//       setErrors(newErrors);
//     } else {
//       // Process form submission
//       console.log('Form submitted:', formData);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label>
//           Name:
//           <input    type="text" value={formData.name} onChange={(e) => setFormData({ name: e.target.value })}
//           />
//         </label>
//         {errors.name && <p>{errors.name}</p>}
//       </div>
//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// export default Form;
