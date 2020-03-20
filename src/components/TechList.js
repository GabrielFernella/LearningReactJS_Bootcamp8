import React, {Component} from 'react';

class TechList extends Component {
    state = {
        newTech: '',
        techs: [
            'NodeJS',
            'ReactJs',
            'React Native',
        ]
    };

    handleImputChange = e => { //precisa ser arrow function para ter acesso ao this
        this.setState({ newTech: e.target.value});
    }

    handleSubmit = e => {
        e.preventDefault();

        this.setState({ techs: [...this.state.techs, this.state.newTech],
        newTech: '',
        })
    }


    render(){
        return (
        <form onSubmit={this.handleSubmit}> 
            <ul>
                {this.state.techs.map(tech => <li key={tech}>{tech}</li>)}
            </ul>
            <input type='text' 
            onChange={this.handleImputChange} 
            value={this.state.newTech}
            />
        <button type='submit'>Enviar</button>

        </form>
        );
    }
}


export default TechList;