import React, { PureComponent, ReactNode } from 'react'

interface PureComponent1Props {
    phone_number: string
}
interface PureComponent1State {

}

class PureComponent1 extends PureComponent<PureComponent1Props, PureComponent1State> {
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

export default PureComponent1;
