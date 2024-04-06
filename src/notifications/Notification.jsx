const Notification = ({ notificationData }) => {

    const colors = {
        success: 'green',
        error: 'red',
        warning: 'orange',
        info: 'blue',
    }
    
    if (!notificationData) {
        return null; // Si no hay datos de notificación, no renderizar nada
    }

    const notificationStyle = {
        position: 'absolute',
        top: 100,
        right: 30,
        backgroundColor: colors[notificationData.type],
        padding: 20,
        borderRadius: 10,
        color: 'white',
    };

    return (
        notificationData && (
            <article style={notificationStyle}> 
                <h3>{notificationData.type.toUpperCase()}</h3>
                {notificationData.text}
            </article>
        )
    );
};

export default Notification;
