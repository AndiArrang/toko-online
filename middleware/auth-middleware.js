import jwt from 'jsonwebtoken'

export const authMidlleware = async (req,res,next) => {
    const token = req.get('Authorization');
    
    if (!token) {
        res.status(401).json({
            errors: 'Unauthorized'
        }).end()
    } else {
        const user = jwt.verify(token,process.env.SECRET_KEY)

        if(!user) {
            res.status(401).json({
                errors: 'Unauthorized'
            }).end()
        } else {
            req.user = user.username
            next()
        }
    }
}