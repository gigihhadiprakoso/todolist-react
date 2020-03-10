import React from 'react';
import Checkbox from './Checkbox';
import styled from 'styled-components';

const ListItem = styled.p`
    text-decoration:${props => props.finished? "line-through": null}
`;

const ListItems = styled.div`
    text-align:center;
`;

function List(properties){
    return (
        <ListItems>
        {
            properties.data.map( function(i) {
            return <ListItem finished={i.flag}><Checkbox stat={i.flag} disabled={true} /> {i.task}</ListItem>
            })
        }
        </ListItems>
    );
}
export default List;