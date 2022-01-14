import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <h2>Please Register</h2>
            <form>
                <input type="email" placeholder="email" />
                <br />
                <input type="password" placeholder="password" />
                <br />
                <input type="submit" value="Submit" />
            </form>
            <Link to="/login">Already Registered</Link>
        </div>
    );
};

export default Register;