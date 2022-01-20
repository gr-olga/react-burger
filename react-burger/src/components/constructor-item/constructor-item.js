import {ConstructorElement, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import React, {useRef} from "react";
import {useDispatch} from "react-redux";
import {useDrag, useDrop} from "react-dnd";
import styles from "../burger-constructor/burger-constructor.module.css";
import {
    DECREASE_COUNTER,
    MOVE_INSIDE_CONSTRUCTOR,
    REMOVE_INGREDIENT_FROM_CONSTRUCTOR,
    REORDER_CONSTRUCTOR
} from "../../services/actions";


export default function ConstructorItem(props) {
    const ref = useRef(null);
    const index = props.index;
    const id = props._id
    const dispatch = useDispatch();

    const [{handlerId}, drop] = useDrop({
        accept: "primary",
        collect(monitor) {
            return {
                isDrag: monitor.getHandlerId(),
            };
        },

        hover(item, monitor) {
            const dragIndex = item.index;
            const hoverIndex = props.index
            // console.log(`dragIndex: ${dragIndex}, hoverIndex: ${hoverIndex}`)
            if (dragIndex === hoverIndex) {
                return;
            }
            const hoverBoundingRect = ref.current?.getBoundingClientRect();
            const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
            const clientOffset = monitor.getClientOffset();
            const hoverClientY = clientOffset.y - hoverBoundingRect.top;
            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return;
            }
            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return;
            }
            dispatch({type: REORDER_CONSTRUCTOR, dragIndex, hoverIndex})
            item.index = hoverIndex;
            dispatch({
                type: MOVE_INSIDE_CONSTRUCTOR
            })
        },
    });
    const [{isDragging}, drag] = useDrag({
        type: "primary",
        item: () => {
            return {id, index};
        },
        collect: (monitor) => {
            return ({
                isDragging: monitor.isDragging(),
            });
        },
    });

    function removeIngredient(id, index) {
        dispatch({
            type: REMOVE_INGREDIENT_FROM_CONSTRUCTOR,
            value: {id, index}
        })
        dispatch({
            type: DECREASE_COUNTER,
            itemId: id
        })
    }

    drag(drop(ref));
    const opacity = isDragging ? 0 : 1;
    return (
        <div
            className={styles.middleItemsList}
            ref={ref}
            data-handler-id={handlerId}
            style={{opacity}}
        >
            <DragIcon type="primary"/>
            <div>{props.index}</div>
            <ConstructorElement
                isLocked={false}
                index={props.index}
                text={props.name}
                price={props.price}
                thumbnail={props.image}
                handleClose={() => removeIngredient(props._id, props.index)}
            />
        </div>
    )
}