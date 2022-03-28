export const socketMiddleware = (wsActions) => {
    return store => {
        let socket = null;

        return next => action => {
            const {dispatch} = store;
            const {type, payload} = action;
            const {
                wsInit,
                wsClose,
                wsSendMessage,
                onOpen,
                onClose,
                onError,
                onMessage
            } = wsActions

            if (type === wsInit) {
                // объект класса WebSocket
                socket = new WebSocket(payload);
                socket.onopen = (evt) => {
                    dispatch({type: onOpen, payload: evt})
                };
                socket.onerror = (evt) => {
                    dispatch({type: onError, payload: evt})
                };
                socket.onmessage = (evt) => {
                    const {data} = evt
                    const parse = JSON.parse(data);
                    dispatch({type: onMessage, payload: {data: parse, timestamp: new Date().getTime() / 100}})
                };
            }
            // if (socket) {
            //     socket.onopen = event => {
            //         dispatch({type: 'WS_CONNECTION_SUCCESS', payload: event});
            //     };
            //
            //     // функция, которая вызывается при ошибке соединения
            //     socket.onerror = event => {
            //         dispatch({type: 'WS_CONNECTION_ERROR', payload: event});
            //     };
            //
            //     // функция, которая вызывается при получении события от сервера
            //     socket.onmessage = event => {
            //         const {data} = event;
            //         dispatch({type: 'WS_GET_MESSAGE', payload: data});
            //     };
            //     // функция, которая вызывается при закрытии соединения
            //     socket.onclose = event => {
            //         dispatch({type: 'WS_CONNECTION_CLOSED', payload: event});
            //     };
            //
            //     if (type === 'WS_SEND_MESSAGE') {
            //         const message = payload;
            //         // функция для отправки сообщения на сервер
            //         socket.send(JSON.stringify(message));
            //     }
            // }

            next(action);
        };
    };
};