import React, { PureComponent, ReactNode } from 'react'

interface FoorProps {

}
interface FoorState {

}

class Foor extends PureComponent<FoorProps, FoorState> {
    constructor(props: FoorProps) {
        super(props)

        this.state = {
            
        }
    }
    onClickDiv() {
        // do stuff
      }
      
    render(): ReactNode {
        return <div onClick={this.onClickDiv} ><div></div><div>dsdsds</div></div>
    }
}

export default Foor
