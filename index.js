import web from "./application/web.js";
import 'dotenv/config.js'

web.listen(3001, () => {
    console.log(`Example app listening on port ${3001}`)
}) 