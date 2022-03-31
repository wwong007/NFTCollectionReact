import React, { ReactElement } from 'react';

interface PropType {
  components: ReactElement[];
}

export default function PageBody(props: PropType) {
  return (
    <>
      {props.components.map((component, index) => {
        return (
          <React.Fragment key={index}>
            {component}
          </React.Fragment>
        )
      })}
    </>
  )
}