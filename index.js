import { config } from "./src/config/config.js";
import DatabaseFactory from "./src/databases/DatabaseFactory.js";

import server from "./src/server.js";

const runServer = async () => {
    try {

        if (config.DATABASE == "mongoose") {
            DatabaseFactory.getConnection()
        }

        server.listen(
            config.PORT,
            console.log(`
                Server is running at: http://${config.HOST}:${config.PORT}
            `)

        )

    } catch (error) {

        console.log(`Error en el server`, error.message);
    }

}

runServer()
