import react from 'react'

class Classcomp extends react.Component{
    constructor() {
        super ()
        this.state = ({
            count : 0,
            name : "the rock"
        })
    }

    handleClick() {
        this.setState({
            count : this.state.count + 1
        })
    }

    diClick() {
        if(this.state.count > 0){
            this.setState({
                count : this.state.count - 1
            })
        } 
    }

    render () {
          return (
            <div>
                <h1>Hello World...</h1>
                <p>count : {this.state.count}</p>
                <button onClick={()=>this.handleClick()}> Increment</button>
                <button onClick={()=>this.diClick()}> Dicrement</button>
            </div>
          )
    }
}

export default Classcomp;