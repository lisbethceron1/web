import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Admin from "./Admin";

import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Button,
  IconButton,
  Input,
  Textarea,
  Checkbox,
} from "@material-tailwind/react";
import { FingerPrintIcon, UsersIcon } from "@heroicons/react/24/solid";
import { PageTitle, Footer } from "@/widgets/layout";
import { FeatureCard, TeamCard } from "@/widgets/cards";
import { featuresData, teamData, contactData } from "@/data";

export function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
 
  return (
    
    <>
   
    <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32">
        {/* Hero section */}
         {/* Botón en la parte superior derecha */}
    <div className="absolute top-4 right-4 ">
            <Admin />
          </div>
        <div className="absolute top-0 h-full w-full bg-[url('/img/Educacion.webp')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/60 bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              
              <Typography variant="h1" color="white" className="mb-6 font-black">
                Educatio
              </Typography>
              <Typography variant="lead" color="white" className="opacity-80">
                ¡Explora el potencial del saber: Donde convergen la instrucción y el aprendizaje en un entorno educativo de excelencia!
              </Typography>
            </div>
          </div>
          
        </div>
      </div>
      <section className="-mt-32 bg-white px-8 pb-29 pt-8 shadow-${shadowIntensity} shadow-gray-900/10 rounded-xl">
        {/* Features section */}
  <div className="container mx-auto ">
    <div className="grid grid-cols-1 gap-6 md:grid-cols-5 lg:grid-cols-3 ">
      {featuresData.map(({ color, title, icon, description }) => (
        <div
          key={title}
          className="feature-card"
          style={{
            padding: "20px",
            border: "1px solid #ccc",
            borderRadius: "10px",
            textAlign: "center",
            transition: "transform 0.3s, box-shadow 0.3s",
            boxShadow: "none",
            cursor: "pointer",
            backgroundColor: "white", 
            zIndex: 1, 
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-5px)";
            e.currentTarget.style.boxShadow = "0px 10px 15px rgba(0, 0, 0, 0.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          <div
            className={`icon ${color}`}
            style={{
              width: "50px",
              height: "50px",
              margin: "0 auto",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: color === "blue" ? "#3498db" : "",
              color: color === "blue" ? "white" : "",
            }}
          >
            {React.createElement(icon, { className: "icon-svg", style: { width: "70%", height: "70%" } })}
          </div>
          <div style={{ fontSize: "1.2em", margin: "10px 0" }}>{title}</div>
          <div style={{ fontSize: "0.9em" }}>{description}</div>
        </div>
      ))}
    </div>
          <div className="mt-32 flex flex-wrap items-center">
            <div className="mx-auto -mt-8 w-full px-4 md:w-5/12  "  >
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 p-2 text-center " >
                <FingerPrintIcon className="h-8 w-8 text-white " />
              </div>
              <Typography variant="h3" className="mb-3 font-bold text-blue-600  " >
                Nosotros
              </Typography>
              <Typography className="mb-8 font-bold text-gray-700  "    >
                En Educatio, nos dedicamos a potenciar el desarrollo único de cada estudiante a través de una educación personalizada. Como líderes innovadores, buscamos transformar vidas, preparando a los estudiantes para destacar en un mundo en constante cambio. Guiados por valores de excelencia, respeto, integridad, innovación y colaboración, creamos un entorno donde la diversidad y la creatividad florecen. 
                <br />
                <br />
                Únete a nosotros en este viaje educativo, donde en Educatio modelamos el futuro a través de una educación a medida para el desarrollo óptimo. 
              </Typography>
              {/* <Button variant="filled">Lee mas</Button> */}
            </div>
            <div className="mx-auto mt-24 flex w-full justify-center px-4 md:w-4/12 lg:mt-0">
              <Card className="shadow-${shadowIntensity}shadow-lg rounded-xl p- bg-gray-200 "style={{boxShadow: '9px 9px 2px rgba(0, 0, 0, 0.2)'}} >
                <CardHeader floated={false} className="relative h-56">
                  <img
                    alt="Card Image"
                    src="/img/educatio.jpeg"
                    className="h-full w-full"
                  />
                </CardHeader>
                <CardBody>
                  <Typography variant="small" color="blue-gray" className="font-normal"></Typography>
                  <Typography
                    variant="h5"
                    color="blue-gray"
                    className="mb-3 mt-2 text-blue-600 "
                  >
                     Equipo de Desarrollo
                  </Typography>
                  <Typography className="font-normal">
                  Gracias a nuestra dedicación, hemos llevado este proyecto adelante. Como equipo, nos esforzamos por crear una experiencia educativa única para ti. ¡Descubre lo que hemos alcanzado juntos!
                  </Typography>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <section className="px-4 pt-20 pb-4" style={{ color: "blue" }}>
        {/* Team section with carousel */}
        <div className="container sm-auto" style={{ color: "blue" }}>
          
          <PageTitle className="" 
            section="Nuestros servicios"
            heading="¡Explora nuestras soluciones personalizadas que se adaptan a tus requerimientos!"
         
          >
            En nuestro equipo, cada uno de nosotros desempeña un papel crucial para alcanzar nuestros objetivos y hacer realidad nuestra visión. Permitenos presentar nuestros servicios:
          </PageTitle><br></br>
        
          <Slider {...settings}
          >
            
            {teamData.map(({ img, name, position, socials }) => (
              <div key={name}>
                <TeamCard
                  img={img}
                  name={name}
                  position={position}
                  socials={
                    <div className="flex items-center gap-2">
                      {socials.map(({ color, name }) => (
                        <IconButton key={name} color={color} variant="text">
                          <i className={`fa-brands text-xl fa-${name}`} />
                        </IconButton>
                      ))}
                    </div>
                  }
                />
              </div>
            ))}
          </Slider>
        </div>
      </section><br></br>
      <section className="px-4 pt-20 pb-48" style={{ color: "blue" ,}}>
  {/* Collaboration section */}
  <div className="container mx-auto" style={{ color: "blue", }}>
    <div style={{ width: "1500px",height:'1px', margin:'10px', }}><br></br><br></br><br></br>
    <PageTitle section="Trabajo en Colaboración" heading="Construyamos algo juntos"><br></br>
    Educatio facilita la colaboración entre estudiantes y educadores para explorar una variedad de materias y temas. Cada interacción refleja nuestro compromiso colectivo. Juntos, construimos un futuro educativo brillante.
    </PageTitle>
    </div>
    
    <div className="mt-100 mb-21 grid max-w-7xl grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
      {/* Content for new carousel */}
      <Slider
        dots={false}
        infinite={true}
        speed={500}
        slidesToShow={1}
        slidesToScroll={1}
        autoplay={true}
        autoplaySpeed={4000}
        
        style={{ maxWidth: "9000px", width: "100%", margin: "0 auto" ,   }} // Ajusta el ancho del contenedor del carrusel
      >
        <div > {/* Ajusta el ancho de las tarjetas dentro del carrusel */}
          <Card style={{backgroundColor:''  }}>
            <CardHeader floated={false} className="relative h-56">
              <img
                alt="Carousel Image 1"
                src="/img/ingles.jpg" // Ruta de la imagen para el primer item del carrusel
                className="h-full w-full object-cover"
              />
            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-3 mt-2 text-blue-600">
              Clases de Ingles
              </Typography>
              <Typography className="font-normal">
              Domina el inglés con nosotros: ¡Explora, aprende y brilla en cada clase!
              </Typography>
            </CardBody>
          </Card>
        </div>
        <div style={{ width: "80%" }}> {/* Ajusta el ancho de las tarjetas dentro del carrusel */}
          <Card>
            <CardHeader floated={false} className="relative h-56">
              <img
                alt="Carousel Image 2"
                src="/img/matematicas.jpg" // Ruta de la imagen para el segundo item del carrusel
                className="h-full w-full object-cover"
              />
            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-3 mt-2 text-blue-600">
              Clases de Matemáticas
              </Typography>
              <Typography className="font-normal">
              Descubre el fascinante mundo de las matemáticas con nosotros: ¡Aprende y domina!
              </Typography>
            </CardBody>
          </Card>
        </div>
        <div style={{ width: "80%" }}> {/* Ajusta el ancho de las tarjetas dentro del carrusel */}
          <Card>
            <CardHeader floated={false} className="relative h-56">
              <img
                alt="Carousel Image 3"
                src="/img/fisica.jpg" // Ruta de la imagen para el tercer item del carrusel
                className="h-full w-full object-cover"
              />
            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-3 mt-2 text-blue-600">
                Clases de Física
              </Typography>
              <Typography className="font-normal">
              Descubre el universo de la física con nosotros: ¡Aprende y experimenta el poder del conocimiento!
              </Typography>
            </CardBody>
          </Card>
        </div>
        <div style={{ width: "80%" }}> {/* Ajusta el ancho de las tarjetas dentro del carrusel */}
          <Card>
            <CardHeader floated={false} className="relative h-56">
              <img
                alt="Carousel Image 3"
                src="/img/quimica.jpg" // Ruta de la imagen para el tercer item del carrusel
                className="h-full w-full object-cover"
              />
            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-3 mt-2 text-blue-600">
                Clases de Química
              </Typography>
              <Typography className="font-normal">
              
              Sumérgete en el fascinante mundo de la química con nosotros: ¡Explora, experimenta y despierta tu curiosidad científica!
              </Typography>
            </CardBody>
          </Card>
        </div>
        <div style={{ width: "80%" }}> {/* Ajusta el ancho de las tarjetas dentro del carrusel */}
          <Card>
            <CardHeader floated={false} className="relative h-56">
              <img
                alt="Carousel Image 3"
                src="/img/historia.jpg" // Ruta de la imagen para el tercer item del carrusel
                className="h-full w-full object-cover"
              />
            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-3 mt-2 text-blue-600">
                Clases de Historia
              </Typography>
              <Typography className="font-normal">
              
              Viaja en el tiempo con nosotros: Descubre los secretos y las maravillas de la historia.
              </Typography>
            </CardBody>
          </Card>
        </div>
        <div style={{ width: "80%" }}> {/* Ajusta el ancho de las tarjetas dentro del carrusel */}
          <Card>
            <CardHeader floated={false} className="relative h-56">
              <img
                alt="Carousel Image 3"
                src="/img/literatura.jpg" // Ruta de la imagen para el tercer item del carrusel
                className="h-full w-full object-cover"
              />
            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-3 mt-2 text-blue-600">
                Clases de Literatura
              </Typography>
              <Typography className="font-normal">
              
              Explora los mundos imaginarios con nosotros: Descubre la magia de la literatura y déjate llevar por historias inolvidables.
              </Typography>
            </CardBody>
          </Card>
        </div>
        <div style={{ width: "80%" }}> {/* Ajusta el ancho de las tarjetas dentro del carrusel */}
          <Card>
            <CardHeader floated={false} className="relative h-56">
              <img
                alt="Carousel Image 3"
                src="/img/economia.jpg" // Ruta de la imagen para el tercer item del carrusel
                className="h-full w-full object-cover"
              />
            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-3 mt-2 text-blue-600">
                Clases de Economia
              </Typography>
              <Typography className="font-normal">
              
              Descubre el poder del dinero y los mercados con nosotros: Aprende los secretos de la economía y toma el control de tu futuro financiero.
              </Typography>
            </CardBody>
          </Card>
        </div>
        <div style={{ width: "80%" }}> {/* Ajusta el ancho de las tarjetas dentro del carrusel */}
          <Card>
            <CardHeader floated={false} className="relative h-56">
              <img
                alt="Carousel Image 3"
                src="/img/geo.jpg" // Ruta de la imagen para el tercer item del carrusel
                className="h-full w-full object-cover"
              />
            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-3 mt-2 text-blue-600">
                Clases de Geografia
              </Typography>
              <Typography className="font-normal">
              
             
              Explora el mundo con nosotros: Descubre los paisajes, culturas y fenómenos naturales de la geografía en cada clase.
              </Typography>
            </CardBody>
          </Card>
        </div>
        <div style={{ width: "80%" }}> {/* Ajusta el ancho de las tarjetas dentro del carrusel */}
          <Card>
            <CardHeader floated={false} className="relative h-56">
              <img
                alt="Carousel Image 3"
                src="/img/bio.jpg" // Ruta de la imagen para el tercer item del carrusel
                className="h-full w-full object-cover"
              />
            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-3 mt-2 text-blue-600">
                Clases de Biologia
              </Typography>
              <Typography className="font-normal">
              
             
              Sumérgete en el fascinante mundo de la biología con nosotros: Explora la vida en todas sus formas y despierta tu curiosidad científica.
              </Typography>
            </CardBody>
          </Card>
        </div>
        {/* Agrega más imágenes y contenido según sea necesario */}
      </Slider>
    </div>
  </div>
</section>
<div className="bg-white">
        <Footer />
      </div>
    </>
  );
}

export default Home;
