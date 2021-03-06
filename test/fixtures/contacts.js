"use strict";

module.exports = [
    {
        id: parseInt(Math.random()*100000, 10).toString(),
        displayName: "Harold Penguin",
        iconUrl: "https://developers.google.com/glass/images/harold.jpg",
        priority: 7,
        acceptCommands: [
            { type: "POST_AN_UPDATE" },
            { type: "TAKE_A_NOTE" }
        ]
    },
    {
        id: "mirror-api-client",
        displayName: "Node.js Mirror API Client",
    }
];
