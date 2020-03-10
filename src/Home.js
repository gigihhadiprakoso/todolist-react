import React, {useState} from 'react';
import InputToDoList from './InputToDoList';
import List from './List';
import styled from 'styled-components';
import Checkbox from './Checkbox';

const Wrapper = styled.main`
    padding-top: 3em;
    padding-bottom: 3em;
    padding-left:2em;
    padding-right:2em;
    background: #96C95F;
    width:100%;
`;

const Form = styled.form`
    text-align:center;
`;

const FormCheck = styled.input`
    // -webkit-appearance: none;
    // background-color: #fafafa;
    // border: 1px solid #cacece;
    // box-shadow: 0 1px 2px rgba(0,0,0,0.05), inset 0px -15px 10px -12px rgba(0,0,0,0.05);
    // padding: 9px;
    // border-radius: 3px;
    // display: inline-block;
    // position: relative;

    display: block;
    margin: 0.2em;
    cursor: pointer;
    padding: 0.2em;
`;

const FormInput = styled.input`
    padding: 7px 5px;
    width:15%;
    margin: 1em 0;
    box-sizing: border-box;
    border: 2px solid #87B05B;
    border-radius: 4px;
`;

const FormButton = styled.button`
    border-radius:4px;
    border:2px solid #87B05B;
    background:#87B05B;
    margin-left:1em;
    margin-right:1em;
    padding-top:0.5em;
    padding-bottom:0.5em;
    color:white;
    cursor:pointer;
`;



class Home extends React.Component {
    constructor(){
        super();
        this.state={
            tasks:[],
            valTask:'',
            statTask:null
        }
    }

    handleValueTask=(params)=>{
        this.setState({valTask:params.target.value});
    }

    handleStatTask=(params)=>{
        this.setState({statTask:params.target.checked});
    }

    addTask=(e)=>{
        e.preventDefault();

        const tempState=this.state.tasks;
        
        tempState.push({
            'task':this.state.valTask,
            'flag':this.state.statTask
        });

        this.setState({
            tasks: [...this.state.tasks],
            valTask: ''
        });

    }

    render(){
        return(
            <Wrapper>
                <Form onSubmit={this.addTask}>
                    <input
                        id="initializer" 
                        type ="checkbox" 
                        value={this.state.statTask}
                        onChange={this.handleStatTask}/>
                    {/* <input 
                        type="text" 
                        placeholder="apa tugas kamu hari ini?"
                        value={this.state.valTask}
                        onChange={this.handleValueTask}
                        /> */}
                    <FormInput 
                        placeholder="Tugas kamu yang selesai" 
                        value={this.state.valTask}
                        onChange={this.handleValueTask}/>
                    <FormButton>Tambah</FormButton>
                </Form>
                {/* <p>{JSON.stringify(this.state)}</p> */}
                {/* <InputToDoList /> */}
                <List data={this.state.tasks}/>
            </Wrapper>
        );
    }
}
export default Home;