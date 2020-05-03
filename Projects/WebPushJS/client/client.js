const publicVapidKey = "BFQPkrnqz_S0yqUIaRtWB7QsHSstguXVaFfew3qmpp7-A6E_PE1DrmQSvS0f5_Q_4jxfK1LlT9Ppo4mk-n5aw3Y";

const send = async () => {

    const serviewWorkerObj = await navigator.serviceWorker.register("/worker.js", {
        scope: '/'
    });

    const subscription = await serviewWorkerObj.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array(publicVapidKey)
    });

    let res = await fetch("/startTask", {
        method: "POST",
        body: JSON.stringify(subscription),
        headers: {
            "Content-Type": "application/json"
        }
    });
    res = await res.json();
    console.log("done", res);
};


const startTask = () => {
    if ('serviceWorker' in navigator) {
        send().catch(err => console.error(err));
    }
};



function urlBase64ToUint8Array(base64String) {
    const padding = '='.repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding)
        .replace(/-/g, '+')
        .replace(/_/g, '/');

    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);

    for (let i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
}