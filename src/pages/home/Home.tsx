// Library imports
import { JSX } from 'react'
import "./home.css"

// App level imports
import BaseLayout from '../../components/layout/BaseLayout'
import profileImg from "../../assets/summerNights.jpeg"

export const Home = (): JSX.Element => {
  return (
    <BaseLayout>
      <div className='home-portafolio'>
        <div className='text-description'>
          <h3>I’m a UX engineer</h3>
          <h3>Hi, It’s Lucy</h3>
          <p>Desarrollo de aplicaciones usando React, React Router, Hooks, Kendo, bootstrap, lottie, Node JS, GIT, Postman, NPM, YARN, APIREST, 
            Construcción de bots con RPA para automatizar procesos de instituciones bancarias y Chat Bots con Watson IBM, para paginas web.
            Crear, documentar, componentes puros en react para su uso posterior dentro del desarrollo, revisar su implementación y sus cambios.</p>  
        </div>
        <div>
          <img src={profileImg} className='img-profile' ></img>
        </div>

      </div>
    </BaseLayout>
  )
}
