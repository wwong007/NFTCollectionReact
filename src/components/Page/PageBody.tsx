import React, { ReactElement } from 'react';

interface PropType {
  components: ReactElement[];
}

export default function PageBody(props: PropType) {
  return (
    <>
      {props.components.map((component) => {
        return (
          component
        )
      })}
    </>
  )
}