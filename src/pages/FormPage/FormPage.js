import React, {Component} from 'react';

class FormPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            form: {
                username: "",
                email: "",
                age: "",
                gender: ""
            }
        }
    }

    addValue = e => {
        this.setState ({form: {
            ...this.state.form,
            [e.target.name]: e.target.value}
        })
    }

    changeAdd = e => {
        e.preventDefault();

        if (this.state.form.username.trim() === "") {
            alert("not username")
        } else if (this.state.form.email.trim() === "") {
            alert("not email")
        } else if (this.state.form.age.trim() === "") {
            alert("not age")
        } else if (this.state.form.gender === "") {
            alert("not gender")
        } else {
            console.log(this.state)
        }

    }

    clear = () => {
        this.setState({
            form: {
                username: "",
                email: "",
                age: "",
                gender: ""
            }
        })
    }


    render() {
        return (
            <>
                <form onSubmit={this.changeAdd}>
                    <input type="text"
                           name="username"
                           placeholder="username"
                           onChange={this.addValue}
                           value={this.state.form.username}/>
                    <input type="email"
                           name="email"
                           placeholder="email"
                           onChange={this.addValue}
                           value={this.state.form.email}/>
                    <input type="number"
                           name="age"
                           placeholder="age"
                           onChange={this.addValue}
                           value={this.state.form.age}/>
                    <select name="gender" onChange={this.addValue} value={this.state.form.gender}>
                        <option value="sex">gender</option>
                        <option value="man">Man</option>
                        <option value="woman">Woman</option>
                    </select>
                    <button type="submit">add</button>
                </form>
                <button onClick={this.clear}>clear all</button>
            </>
        );
    }
}

export default FormPage;