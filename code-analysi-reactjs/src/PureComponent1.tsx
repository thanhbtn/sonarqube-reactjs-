import React, { PureComponent, ReactNode } from 'react'

interface PureComponent1Props {

}
interface PureComponent1State {

}

class PureComponent1 extends PureComponent<PureComponent1State, PureComponent1Props> {
    constructor(props: PureComponent1Props) {
        super(props)
        
        this.state = {
            
        }
        super(props)
    }
    
    render(): ReactNode {
    return <div><div></div></div>
    }
}

export default PureComponent1Props;
