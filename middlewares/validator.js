

const validator= (schema)=>[
    (req,res,next) => {
        const validated= schema.validate(req.body, { abortEarly:false })
      console.log(validated.error)
       
      
       if (validated.error) {
        return res.status(200).json({
            success: false,
            message: validated.error.details.map(error=>error.message)
        })
    }
        next()
       }
    

]
module.exports = validator