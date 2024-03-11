<script>

const socket = new WebSocket('http://127.0.0.1:3001');

export default {

    created() {
        console.log(socket)

        // socket.onopen(){
        //     console.log("WebSocket connection opened:", event);
        // };
        // socket.onmessage => (event) {
        //     console.log("WebSocket message received:", event.value);
        // };
    },
}
</script>

<template>
    <div>
        121212
    </div>
</template>