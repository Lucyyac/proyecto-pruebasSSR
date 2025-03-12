// Library imports
import { JSX } from 'react'
import "./info.css"

// App level imports
import { BaseLayout } from '../../components'

export const Info = (): JSX.Element => {
  return (
    <BaseLayout>
    <div className='info-portafolio'>
      <div className='text-infoUserExperience'>
          <h3>Diseño UX</h3>
          <p>Diseño, creación, documentación y mantenimiento de
              componentes reutilizables, en figma para su uso en diseños,
              prototipos de alto nivel, y posteriormente para su desarrollo en
              proyectos react.
              Elaboración del sistema de diseño, documentación de
              componentes, estandarización, responsive, first mobile.
              Construcción de diseños, prototipos interactivos de bajo y
              alto nivel, wireframes, sistema de diseño, camino de usuario,
              con Adobe XD y Figma.
              Trabajar con el equipo de diseño, marketing, líderes,
              desarrolladores para llegar a acuerdos y soluciones, para los
              proyectos.
              Testing QA, en flujos, funciones específicas, pantallas.</p>  
        </div>
    </div>
    
    </BaseLayout>
  )
}
