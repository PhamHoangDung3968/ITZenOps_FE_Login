import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

import './plugins/fontawesome-free/css/all.min.css';
import './plugins/daterangepicker/daterangepicker.css';
import './plugins/icheck-bootstrap/icheck-bootstrap.min.css';
import './plugins/bootstrap-colorpicker/css/bootstrap-colorpicker.min.css';
import './plugins/tempusdominus-bootstrap-4/css/tempusdominus-bootstrap-4.min.css';
import './plugins/select2/css/select2.min.css';
import './plugins/select2-bootstrap4-theme/select2-bootstrap4.min.css';
import './plugins/bootstrap4-duallistbox/bootstrap-duallistbox.min.css';
import './plugins/bs-stepper/css/bs-stepper.min.css';
import './plugins/dropzone/min/dropzone.min.css';
import './dist/css/adminlte.min.css';
import './dist/css/pagination.css';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

//  const navigate = useNavigate();

const handleLogin = async (e) => {
  e.preventDefault();
  try {
    const res = await axios.post('http://localhost:3000/auth/login', {
      username,
      password
    });

    toast.success('Đăng nhập thành công!', {
      position: 'top-right',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });

    setTimeout(() => {
      window.location.href = 'https://www.google.com/';
    }, 1000);
  } catch (err) {
    toast.error('Đăng nhập thất bại!', {
      position: 'top-right',
      autoClose: 3000,
    });
  }
};



  return (
    <div className="hold-transition login-page">
      <div className="login-box">
        <div className="card card-outline card-primary">
          <div className="card-header text-center">
            <a href="#" className="h1"><b>Admin</b>LTE</a>
          </div>
          <div className="card-body">
            <p className="login-box-msg">Sign in to start your session</p>

            <form onSubmit={handleLogin}>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="input-group mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-lock"></span>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-8">
                  <div className="icheck-primary">
                    <input type="checkbox" id="remember" />
                    <label htmlFor="remember">Remember Me</label>
                  </div>
                </div>
                <div className="col-4">
                  <button type="submit" className="btn btn-primary btn-block">Sign In</button>
                </div>
              </div>
            </form>

            <div className="social-auth-links text-center mt-2 mb-3">
              <a href="#" className="btn btn-block btn-primary">
                <i className="fab fa-facebook mr-2"></i> Sign in using Facebook
              </a>
              <a href="#" className="btn btn-block btn-danger">
                <i className="fab fa-google-plus mr-2"></i> Sign in using Google+
              </a>
            </div>

            <p className="mb-1">
              <a href="forgot-password.html">I forgot my password</a>
            </p>
            <p className="mb-0">
              <a href="register.html" className="text-center">Register a new membership</a>
            </p>
          </div>
        </div>
      </div>
      <ToastContainer />

    </div>
    
  );
}

export default App;