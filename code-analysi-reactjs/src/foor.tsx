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
        super(props)
    }
    onClickDiv(a , b) {
        // do stuff
        
      }
      
      onClickDiv(a , b) {
        // do stuff
        
      }
    render(): ReactNode {
    return <div onClick={this.onClickDiv(1, 2)} ><div></div>{[1,2,3,4,5].map(v=><span>{v}</span>)}</div>
    }
}

export default Foor
