import React from "react";
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
  return (
    <>
      <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32">
        <div className="absolute top-0 h-full w-full bg-[url('/img/Educacion.webp')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/60 bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              <Typography
                variant="h1"
                color="white"
                className="mb-6 font-black"
              >
                Educatio
              </Typography>
              <Typography variant="lead" color="white" className="opacity-80">
                

              "Conéctate con tu conocimiento: Donde aprender y enseñar se encuentran"
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <section className="-mt-32 bg-white px-4 pb-20 pt-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map(({ color, title, icon, description }) => (
              <FeatureCard
                key={title}
                color={color}
                title={title}
                icon={React.createElement(icon, {
                  className: "w-5 h-5 text-white",
                })}
                description={description}
              />
            ))}
          </div>
          <div className="mt-32 flex flex-wrap items-center">
            <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 p-2 text-center shadow-lg">
                <FingerPrintIcon className="h-8 w-8 text-white " />
              </div>
              <Typography
                variant="h3"
                className="mb-3 font-bold"
                color="blue-gray"
              >
                Nosotros
              </Typography>
              <Typography className="mb-8 font-normal text-blue-gray-500">
              En Educatio, nos dedicamos a potenciar el desarrollo único de cada estudiante a través de una educación personalizada. Como líderes innovadores, buscamos transformar vidas, preparando a los estudiantes para destacar en un mundo en constante cambio. Guiados por valores de excelencia, respeto, integridad, innovación y colaboración, creamos un entorno donde la diversidad y la creatividad florecen. 
                <br />
                <br />
                Únete a nosotros en este viaje educativo, donde en Educatio modelamos el futuro a través de una educación a medida para el desarrollo óptimo. 
              </Typography>
              {/* <Button variant="filled">Lee mas</Button> */}
            </div>
            <div className="mx-auto mt-24 flex w-full justify-center px-4 md:w-4/12 lg:mt-0">
              <Card className="shadow-lg border shadow-gray-500/10 rounded-lg">
                <CardHeader floated={false} className="relative h-56">
                  <img
                    alt="Card Image"
                    src="/img/Educacion.jpg"
                    className="h-full w-full"
                  />
                </CardHeader>
                <CardBody>
                  <Typography variant="small" color="blue-gray" className="font-normal">Empresa</Typography>
                  <Typography
                    variant="h5"
                    color="blue-gray"
                    className="mb-3 mt-2 font-bold"
                  >
                    Servicios de Primera Clase
                  </Typography>
                  <Typography className="font-normal text-blue-gray-500">
                  En un mundo donde el conocimiento es el motor del progreso, nosotros creamos puentes entre mentes ávidas de aprender y expertos deseosos de enseñar. Con nuestra plataforma, la educación trasciende barreras y se convierte en un viaje colaborativo donde cada experiencia de aprendizaje es única.
                  </Typography>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <section className="px-4 pt-20 pb-48">
        <div className="container mx-auto">
          <PageTitle section="Nuestros servicios" heading="¡Explora nuestras soluciones personalizadas que se adaptan a tus requerimientos!">
            En nuestro equipo, cada uno de nosotros desempeña un papel crucial para alcanzar nuestros objetivos y hacer realidad nuestra visión. Permitenos presentar nuestros servicios:
          </PageTitle>
          <div className="mt-24 grid grid-cols-1 gap-12 gap-x-24 md:grid-cols-2 xl:grid-cols-4">
            {teamData.map(({ img, name, position, socials }) => (
              <TeamCard
                key={name}
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
            ))}
          </div>
        </div>
      </section>
      <section className="relative bg-white py-17 px-4">
        <div className="container mx-auto">
          <PageTitle section="Trabajo en Colaboración" heading="Construyamos algo juntos">
          En Educatio, valoramos la colaboración y el trabajo en equipo. Nuestra aplicación brinda un espacio donde estudiantes y educadores pueden unir fuerzas para alcanzar sus metas educativas. Desde la creación de contenido hasta la participación en clases virtuales, cada acción realizada en Educatio refleja el esfuerzo conjunto de nuestra comunidad educativa. ¡Juntos, construyamos un futuro más brillante a través del aprendizaje colaborativo en Educatio
          </PageTitle>
          <div className="mx-auto mt-10 mb-24 grid max-w-4xl grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
</div>

          <PageTitle section="Contáctanos" heading="¿Tienes dudas sobre nosotros?">
          Completa este formulario y nos pondremos en contacto contigo en 24 horas.
          </PageTitle>
          <form className="mx-auto w-full mt-12 lg:w-5/12">
            <div className="mb-8 flex gap-8">
              <Input variant="outlined" size="lg" label="Nombre Completo" />
              <Input variant="outlined" size="lg" label="Correo Electronico" />
            </div>
            <Textarea variant="outlined" size="lg" label="Mensaje" rows={8} />
            <Checkbox
              label={
                <Typography
                  variant="small"
                  color="gray"
                  className="flex items-center font-normal"
                >
                  Estoy de acuerdo con los 
                  <a
                    href="#"
                    className="font-medium transition-colors hover:text-gray-900"
                  >
                    &nbsp;Términos y Condiciones
                  </a>
                </Typography>
              }
              containerProps={{ className: "-ml-2.5" }}
            />
            <Button variant="gradient" color="blue" size="lg" className="mt-8" fullWidth>
              Enviar Mensaje
            </Button>
          </form>
        </div>
      </section>
      <div className="bg-white">
        <Footer />
      </div>
    </>
  );
}

export default Home;
