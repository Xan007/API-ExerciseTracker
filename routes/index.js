import { Router } from "express"

import exercises from "../routes/exercises.js"
import logs from "../routes/logs.js"
import users from "../routes/users.js"

const router = Router()

router.use("/users/", users)
router.use("/users/:_id/exercises", exercises)
router.use("/users/:_id/logs", logs)

export default router