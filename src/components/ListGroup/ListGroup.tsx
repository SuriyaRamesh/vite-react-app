import { useState } from "react";
// import './ListGroup.css';
// import styles from './ListGroup.module.css';
import styled from "styled-components";
import { BsFillCalendarFill } from 'react-icons/bs';

interface ListGroupProps {
    heading: string;
    items: string[];
    onSelectItem: (item: string) => void;
}

interface ListItemProps {
    active: boolean;
}

const List = styled.ul`
 list-style: none;
 padding: 0;
`

const ListItem = styled.li<ListItemProps>`
 padding: 5px;
 background: ${(props) => (props.active ? "blue" : "none")}
`

function ListGroup({heading, items, onSelectItem}: ListGroupProps) {
    // items = [];
    const [selectedIndex, setSelectedIndex] = useState(-1);

    return (
    <>
        <h1>{heading}</h1>
        {items.length === 0 && <p>No item found.</p>}
        {/* <ul className="list-group"> */}
        {/* <ul className={styles.listGroup}>
            {items.map((item, index) => {
                return (
                    <li 
                        className={selectedIndex === index ? "list-group-item active" : "list-group-item"} 
                        key={item} 
                        onClick={
                            () => {
                                setSelectedIndex(index);
                                onSelectItem(item);
                            }
                        } 
                    >
                            {item}
                    </li>)
            })}
        </ul> */}
        <List>
            {items.map((item, index) => {
                return (
                    <ListItem 
                        active={index === selectedIndex}
                        key={item} 
                        onClick={
                            () => {
                                setSelectedIndex(index);
                                onSelectItem(item);
                            }
                        } 
                    >
                            {<BsFillCalendarFill color="grey" size="10" />} {item}
                    </ListItem>)
            })}
        </List>
    </>    
); 
}

export default ListGroup;