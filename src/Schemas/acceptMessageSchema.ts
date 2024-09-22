import { z } from "zod"


export const acceptMessageSchema = z.object({
    accepMessage: z.boolean(),
    password: z.string(),
})