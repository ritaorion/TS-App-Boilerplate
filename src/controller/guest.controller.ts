import { NextFunction, Request, Response } from 'express'

export const Welcome = (req: Request, res: Response, next: NextFunction) => {
    try {
        res.sendFile('index.html', { root: './src/public' })
    } catch (error) {
        console.log(error)
    }
}