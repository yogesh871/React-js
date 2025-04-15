import react from 'react'

class Hello extends react.Component{
    constructor(props) {
        super (props)
        this.state = ({
            count : 0,
        })

        console.log(props)
    }

    increment() {
        this.setState({
            count : this.state.count + 1
        })
    }

    dicrement() {
        if(this.state.count > 0){
            this.setState({
                count : this.state.count - 1
            })
        } 
    }

    render () {
          return (
            <div> 
                <h1>Count App</h1>
                <p>Name : {this.props.name}</p>
                <p>Age : {this.props.age}</p>
                <p>Selery: {this.props.selery}</p>
                <p>companyName : {this.props.companyName}</p>
                <p>count : {this.state.count}</p>
                <button onClick={()=>this.increment()}> Increment</button>
                <button onClick={()=>this.dicrement()}> Dicrement</button>
            </div>
          )
    }
}

export default Hello;