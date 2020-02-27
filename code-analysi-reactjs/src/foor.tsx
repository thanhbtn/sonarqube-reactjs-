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
    onClickDiv(a , b) {
        // do stuff
        
      }

    render(): ReactNode {
        return <div onClick={this.onClickDiv(1, 2)} ><div></div><div>dsdsds</div></div>
    }
}

export default Foor
