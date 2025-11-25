const mineflayer = require('mineflayer')
const express = require('express')

// ----------------------
// MINEFLAYER BOT WITH /login
// ----------------------
function startBot() {
    const bot = mineflayer.createBot({
        host: "Kiingdom_SmP.aternos.me",   // Server IP daalo
        port: 38683,
        username: "DIBBACHOR"    // Bot ka naam
    })

    bot.on("login", () => {
        console.log("Bot joined the server!")

        // Server login command
        bot.chat("/login Prateek125")  // <-- Apna password yaha likho
        console.log("Login command sent: /login Prateek125")
    })

    // Chat listener
    bot.on("chat", (username, message) => {
        if (username === bot.username) return

        // Optional: React to chat
        if (message.toLowerCase() === "hi bot") {
            bot.chat("Hello bhai!")
        }
    })

    // Auto reconnect
    bot.on("end", () => {
        console.log("Bot disconnected. Reconnecting in 10 seconds...")
        setTimeout(startBot, 10000)
    })

    bot.on("kicked", (reason) => console.log("Kicked:", reason))
    bot.on("error", (err) => console.log("Error:", err))
}

startBot()

// ----------------------
// KEEP-ALIVE SERVER (24/7)
// ----------------------
const app = express()

app.get("/", (req, res) => {
    res.send("Mineflayer bot is running 24/7!")
})

app.listen(3000, () => {
    console.log("Keep-alive server active on port 3000")
})
