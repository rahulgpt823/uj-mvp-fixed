import { getCookie, createError } from 'h3'
import jwt from 'jsonwebtoken'

interface JwtPayload {
    userId: string
    // add other fields from token if you have them
}

export const verifyAuthToken = (event: any): JwtPayload => {
    const config = useRuntimeConfig()
    const token = getCookie(event, 'auth_token')

    if (!token) {
        throw createError({
            statusCode: 401,
            statusMessage: 'Unauthorized',
            message: 'Missing authentication token',
        })
    }

    try {
        const decoded = jwt.verify(token, config.jwtSecret) as JwtPayload
        return decoded
    } catch (error) {
        throw createError({
            statusCode: 401,
            statusMessage: 'Unauthorized',
            message: 'Invalid authentication token',
        })
    }
} 