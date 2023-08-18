import { Router } from 'express'
import { Register } from '../controller/auth.controller'
import { Welcome } from '../controller/guest.controller'

export const routes = (router: Router) => {
    router.get('/', Welcome)
    router.post('/api/register', Register)
}