import {ConstructorElement, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import React, {useRef} from "react";
import {useDispatch} from "react-redux";
import {DropTargetMonitor, useDrag, useDrop} from "react-dnd";
import styles from "../burger-constructor/burger-constructor.module.css";
import {
    DECREASE_COUNTER,
    MOVE_INSIDE_CONSTRUCTOR,
    REMOVE_INGREDIENT_FROM_CONSTRUCTOR,
    REORDER_CONSTRUCTOR
} from "../../services/actions";
import {debounce} from "lodash";
import {ConstructorItemProps, TConstructorItem} from "../../utils/types";


export default function ConstructorItem(props: ConstructorItemProps) {
    const ref = useRef<HTMLHeadingElement>(null);
    const index = props.index;
    const id = props._id
    const dispatch = useDispatch();

    function onHover(item: TConstructorItem, monitor: DropTargetMonitor) {
        const dragIndex = item.index;
        const hoverIndex = props.index
        if (dragIndex === hoverIndex) {
            return;
        }
        dispatch({type: REORDER_CONSTRUCTOR, dragIndex, hoverIndex})
        item.index = hoverIndex;
        dispatch({
            type: MOVE_INSIDE_CONSTRUCTOR
        })
    }

    const [{handlerId}, drop]: any = useDrop({
        accept: "primary",
        collect(monitor) {
            return {
                isDrag: monitor.getHandlerId(),
            };
        },
        hover: debounce((item: TConstructorItem, monitor: DropTargetMonitor) => onHover(item, monitor), 300),
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

    function removeIngredient(id: string, index: number) {
        dispatch({
            type: REMOVE_INGREDIENT_FROM_CONSTRUCTOR,
            value: {id, index}
        })
        dispatch({
            type: MOVE_INSIDE_CONSTRUCTOR
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
            <ConstructorElement
                isLocked={false}
                text={props.name}
                price={props.price}
                thumbnail={props.image}
                handleClose={() => removeIngredient(props._id, props.index)}
            />
        </div>
    )
}