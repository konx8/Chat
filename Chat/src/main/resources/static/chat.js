let socket;
let nick;
function connect(){
    nick = document.getElementById("nick")
    if(!nick) {
        alert("Set Nick !")
        return;
    }
}

socket = new WebSocket("ws://localhost:8080/chat");

socket.onmessage = (event) => {
    const chat = document.getElementById("chat");
    const msg = document.createElement("div");
    msg.textContent = event.data;
    chat.appendChild(msg);
};

function send() {
    const input = document.getElementById("msg");

    if (input.value.trim() !== ""){

        const messageData = {
        nick:nick.value,
        text:input.value
        }
        
        socket.send(JSON.stringify(messageData));
        input.value = "";
    }
}
