// Library imports
import { JSX } from 'react'

// App level imports
import BaseLayout from '../../components/layout/BaseLayout'

export const UserInterface = (): JSX.Element => {
  return (
    <BaseLayout>
       <div className='info-portafolio'>
      <div className='text-infoUserExperience'>
          <h3>Diseño UX</h3>
          <p>
            Crear componentes reutilizables, librerias de componentes como Material UI, Boostrap, Kendo, utilizar responsive, grid.
              Elaboración del sistema de diseño, documentación de
              componentes, estandarización, responsive, first mobile.
              Trabajar con el equipo de diseño, marketing, líderes,
              desarrolladores para llegar a acuerdos y soluciones, para los
              proyectos.
              Testing QA, en flujos, funciones específicas, pantallas.</p>  
        </div>
    </div>
    </BaseLayout>
  )
}
