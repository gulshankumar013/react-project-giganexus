// import React from 'react';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
// import { Container, Box, Typography, Button, TextField, CircularProgress } from '@mui/material';
// import { useNavigate } from 'react-router-dom';
// import { LockOutlined as LockIcon } from '@mui/icons-material';
// import axios from 'axios'; // Import axios for API calls
// import './adminLogin.css'; // Import your CSS file

// const validationSchema = Yup.object().shape({
//   email: Yup.string().email('Invalid email format').required('Email is required'),
//   password: Yup.string().required('Password is required'),
// });

// const AdminLoginPage = () => {
//   const navigate = useNavigate();

//   const handleSubmit = async (values, { setSubmitting, setFieldError }) => {
//     const payload = {
//       eventID: "1001",
//       addInfo: {
//         email: values.email,
//         password: values.password,
//       }
//     };

//     try {
//       const response = await axios.post('http://localhost:5164/adminSignin', payload);
//       console.log(response.data); // Log response for debugging

//       if (response.data.rData.rMessage === "Signin Successful") {
//         // Handle successful login
//         navigate("/dasbord");
//       } else {
//         // Handle invalid credentials
//         setFieldError('password', 'Invalid email or password');
//       }
//     } catch (error) {
//       console.error('Error logging in:', error);
//       setFieldError('password', 'Invalid email or password');
//     } finally {
//       setSubmitting(false); // Ensure form submission state is reset
//     }
//   };

//   return (
//     <Container className='Admin-Login'>
//       <div className='login-box'>
//         <LockIcon style={{ fontSize: '3rem', color: '#1976d2' }} />
//         <Typography component="h1" variant="h5">
//           Admin Login
//         </Typography>
//         <Formik
//           initialValues={{ email: '', password: '' }}
//           validationSchema={validationSchema}
//           onSubmit={handleSubmit}
//         >
//           {({ isSubmitting }) => (
//             <Form className='adminlogin'>
//               <Box mt={2}>
//                 <Field name="email" as={TextField} variant="outlined" fullWidth label="Email" />
//                 <ErrorMessage name="email" component="div" className="error-message" />
//               </Box>
//               <Box mt={2}>
//                 <Field name="password" as={TextField} type="password" variant="outlined" fullWidth label="Password" />
//                 <ErrorMessage name="password" component="div" className="error-message" />
//               </Box>
//               <Box mt={2}>
//                 <Button type="submit" fullWidth variant="contained" color="primary" disabled={isSubmitting}>
//                   {isSubmitting ? <CircularProgress size={24} /> : 'Login'}
//                 </Button>
//               </Box>
//             </Form>
//           )}
//         </Formik>
//       </div>
//     </Container>
//   );
// };

// export default AdminLoginPage;

// src/components/AdminLoginPage.jsx

import React, { useState } from 'react';
import { Container, Box, Typography, Button, TextField, CircularProgress } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { LockOutlined as LockIcon } from '@mui/icons-material';
import axios from 'axios'; // Import axios for API calls
import './adminLogin.css'; // Import your CSS file

const AdminLoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    const payload = {
      eventID: "1001",
      addInfo: {
        email: email,
        password: password,
      }
    };

    try {
      const response = await axios.post('http://localhost:5164/adminSignin', payload);
      console.log(response.data); // Log response for debugging

      if (response.data.rData.rMessage === "Signin Successful") {
        // Handle successful login
        navigate("/dasbord");
      } else {
        // Handle invalid credentials
        setError('Invalid email or password');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      setError('Invalid email or password');
    } finally {
      setIsSubmitting(false); // Ensure form submission state is reset
    }
  };

  return (
    <>
    <div className='Admin-Login'>
        <div className='Admin-Login-child'>
        <div className='Admin-Loginimg'></div>
      <div className='login-box'>
        <LockIcon style={{ fontSize: '3rem', color: '#1976d2' }} />
        <Typography component="h1" variant="h5">
          Admin Login
        </Typography>
        <form className='adminlogin' onSubmit={handleSubmit}>
          <Box mt={2}>
            <TextField
              name="email"
              variant="outlined"
              fullWidth
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {error && <div className="error-message">{error}</div>}
          </Box>
          <Box mt={2}>
            <TextField
              name="password"
              type="password"
              variant="outlined"
              fullWidth
              label="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {error && <div className="error-message">{error}</div>}
          </Box>
          <Box mt={2}>
            <Button type="submit" fullWidth variant="contained" color="primary" disabled={isSubmitting}>
              {isSubmitting ? <CircularProgress size={24} /> : 'Login'}
            </Button>
          </Box>
        </form>
      </div>
      </div>
    </div>
    </>
  );
};

export default AdminLoginPage;
