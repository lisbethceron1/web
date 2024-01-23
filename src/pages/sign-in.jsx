import React, { useState } from 'react';
import { Input, Checkbox, Button, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import axios from 'axios';

export function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [N_Identificacion, setN_Identificacion] = useState('');
  const [NomCompleto, setNomCompleto] = useState('');
  const [Telefono, setTelefono] = useState('');
  const [Fec_Nacimiento, setFec_Nacimiento] = useState('');
  const [Ciudad, setCiudad] = useState('');

  const handleSignIn = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/signin', {
        email,
        password,
        N_Identificacion,
        NomCompleto,
        Telefono,
        Fec_Nacimiento,
        Ciudad,
      });

      if (response.data.success) {
        // Manejar el inicio de sesión exitoso
        console.log('Inicio de sesión exitoso', response.data.user);
      } else {
        // Manejar el inicio de sesión fallido
        console.error('Inicio de sesión fallido', response.data.message);
      }
    } catch (error) {
      console.error('Error durante el inicio de sesión', error);
    }
  };

  return (
    <section className="m-8 flex gap-4">
      <div className="w-full lg:w-3/5 mt-24">
        <div className="text-center">
          <Typography variant="h2" className="font-bold mb-4">Sign In</Typography>
          <Typography variant="paragraph" color="blue-gray" className="text-lg font-normal">Enter your email and password to Sign In.</Typography>
        </div>
        <form className="mt-8 mb-2 mx-auto w-80 max-w-screen-lg lg:w-1/2">
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
              Your email
            </Typography>
            <Input
              size="lg"
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
              Password
            </Typography>
            <Input
              type="password"
              size="lg"
              placeholder="********"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              onChange={(e) => setPassword(e.target.value)}
            />

            {/* Campos adicionales */}
            <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
              Identification Number
            </Typography>
            <Input
              size="lg"
              placeholder="123456789"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              onChange={(e) => setN_Identificacion(e.target.value)}
            />
            <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
              Full Name
            </Typography>
            <Input
              size="lg"
              placeholder="John Doe"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              onChange={(e) => setNomCompleto(e.target.value)}
            />
            <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
              Phone Number
            </Typography>
            <Input
              size="lg"
              placeholder="123456789"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              onChange={(e) => setTelefono(e.target.value)}
            />
            <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
              Date of Birth
            </Typography>
            <Input
              size="lg"
              placeholder="YYYY-MM-DD"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              onChange={(e) => setFec_Nacimiento(e.target.value)}
            />
            <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
              City
            </Typography>
            <Input
              size="lg"
              placeholder="Your City"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              onChange={(e) => setCiudad(e.target.value)}
            />
          </div>
          <Checkbox
            label={
              <Typography
                variant="small"
                color="gray"
                className="flex items-center justify-start font-medium"
              >
                I agree the&nbsp;
                <a
                  href="#"
                  className="font-normal text-black transition-colors hover:text-gray-900 underline"
                >
                  Terms and Conditions
                </a>
              </Typography>
            }
            containerProps={{ className: "-ml-2.5" }}
          />
          <Button className="mt-6" fullWidth onClick={handleSignIn}>
            Sign In
          </Button>

          <div className="flex items-center justify-between gap-2 mt-6">
            <Checkbox
              label={
                <Typography
                  variant="small"
                  color="gray"
                  className="flex items-center justify-start font-medium"
                >
                  Subscribe me to newsletter
                </Typography>
              }
              containerProps={{ className: "-ml-2.5" }}
            />
            <Typography variant="small" className="font-medium text-gray-900">
              <a href="#">
                Forgot Password
              </a>
            </Typography>
          </div>
          <div className="space-y-4 mt-8">
            <Button size="lg" color="white" className="flex items-center gap-2 justify-center shadow-md" fullWidth>
              <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* ... (icono de Google) */}
              </svg>
              <span>Sign in With Google</span>
            </Button>
            <Button size="lg" color="white" className="flex items-center gap-2 justify-center shadow-md" fullWidth>
              <img src="/img/twitter-logo.svg" height={24} width={24} alt="" />
              <span>Sign in With Twitter</span>
            </Button>
          </div>
          <Typography variant="paragraph" className="text-center text-blue-gray-500 font-medium mt-4">
            Not registered?
            <Link to="/sign-up" className="text-gray-900 ml-1">Create account</Link>
          </Typography>
        </form>
      </div>
      <div className="w-2/5 h-full hidden lg:block">
        <img
          src="/img/pattern.png"
          className="h-full w-full object-cover rounded-3xl"
          alt="Pattern"
        />
      </div>
    </section>
  );
}

export default SignIn;
