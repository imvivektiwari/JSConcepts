const notify = () => {
    if (Notification.permission === "granted") {
        let notification = new Notification("Task completed", {
            body: "Numbers are added!",
            icon:""
        });
        notification.onclick = ()=>{
            console.log("you clicked the notification")
        };
    }
    else if (Notification.permission !== "denied") {
        Notification.requestPermission().then(permission => {
            if(Notification.permission === "granted"){
                notify();
            }
        });
    };
};
notify();