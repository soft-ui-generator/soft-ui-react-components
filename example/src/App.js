import React, { Fragment } from 'react'

import { ExampleComponent, Button } from 'soft-ui-react-components'
import 'soft-ui-react-components/dist/index.css'

const App = () => {
  return (
    <Fragment>
      <Button
        backgroundColor={"#ED2939"}
        isSameShadowColor={false}
        shadowColorBase={'#F0F0F0'}
        shadowBlur={30}
        fontColor={'#FFF'}
        style={{width:'170px'}}
        borderRadius={12}
        shadowLength={5}>Hi</Button>
    </Fragment>
  )
}

export default App
