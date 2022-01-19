import {ConstructorElement, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import React, {useRef} from "react";
import {useDispatch} from "react-redux";
import {useDrag, useDrop} from "react-dnd";
import styles from "../burger-constructor/burger-constructor.module.css";
import {DECREASE_COUNTER, REMOVE_INGREDIENT_FROM_CONSTRUCTOR} from "../../services/actions";


export default function ConstructorItem(props) {

    const ref = useRef()
    const index = props.index;
    const id = props.id
    const dispatch = useDispatch();

    const [{handlerId}, dropItemTarget] = useDrop({
        accept: "primary",
        item: {index},
        collect(monitor) {
            return {
                isDrag: monitor.getHandlerId(),
            };
        },
        // drop(dropItemTarget) {
        //     dispatch({
        //         type: MOVE_INSIDE_CONSTRUCTOR
        //     })
        // }
        hover(item, monitor) {
            // if (!ref.current) {
            //     return;
            // }
            const dragIndex = item.index;
            const hoverIndex = index;
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
            props.moveCard(dragIndex, hoverIndex);
            item.index = hoverIndex;
        },
    });

    const [{isDrag}, dragRef] = useDrag({
        type: "primary",
        item: () => {
            return {id, index};
        },
        collect: (monitor) => {
            return ({
                isDrag: monitor.isDragging(),
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


    return (
        !isDrag &&
        <div
            ref={dropItemTarget}
            data-handler-id={handlerId}
        >
            <div
                className={styles.middleItemsList}
                ref={dragRef}
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
        </div>
    )
}