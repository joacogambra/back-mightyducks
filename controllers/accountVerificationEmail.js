const { createTransport } = require('nodemailer')
const { google } = require('googleapis')
const OAuth2 = google.auth.OAuth2
const { GOOGLE_ID,GOOGLE_REFRESH,GOOGLE_SECRET,GOOGLE_URL,GOOGLE_USER,BACK_URL } = process.env

function createClient() {
    return new OAuth2( 
        GOOGLE_ID,
        GOOGLE_SECRET,
        GOOGLE_URL
    )
}

function getTransport(client) {
 
    const accessToken = client.getAccessToken()
    return createTransport({
        service: 'gmail',   
        auth: {            
            user: GOOGLE_USER,
            type: 'OAuth2',
            clientId: GOOGLE_ID,
            clientSecret: GOOGLE_SECRET,
            refreshToken: GOOGLE_REFRESH,
            accessToken: accessToken
        },
        tls: { rejectUnauthorized: false }
    })
}


function getEmailBody({mail, host, code}) {
    return `
        <div style="width:100%; height:100%; background-image: url(https://images.squarespace-cdn.com/content/v1/581825fbebbd1ac01c1f91a4/1478056685584-XLXBWC7YYIO7N09BUZ0P/sea-water-ocean-waves.jpg?format=2500w); padding:120px 0px; display: flex; align-items: center;justify-content: center;flex-direction: column; ">
            <div style="background-color: rgba(255, 255, 255, 0.637);border-radius: 6mm; margin-left:36%; padding:20px ">
                <h1 style="color: #252525; font-style: italic; font: 400; letter-spacing: .2rem; text-align:center">Hi, ${mail}</h1>
                <h2 style="color: #252525; font-style: italic;letter-spacing: .2rem;">Welcome to MyTinerary, enjoy the travel</h2>
                <div style="margin-bottom:10px; margin-top:10px; width:100%; display:flex;justify-content: center; ">
                    <a href="${host}auth/verify/${code}" style="background-color: #252525; color: white; border-radius: 6mm; font-style: italic; font: 600; letter-spacing: .15rem; padding:20px; margin-left:40%; ">Verify</a>
                </div>              
            </div>
        </div>
    `
}


const accountVerificationEmail = async (mailNewUser,codeCrypto) => {
    const client = createClient()
    client.setCredentials({ refresh_token: process.env.GOOGLE_REFRESH })
    const transport = getTransport(client)
    const mailOptions = {
        from: GOOGLE_USER, 
        to: mailNewUser, 
        subject: 'Verify your new account in MyTinerary', 
        html: getEmailBody({ mail:mailNewUser,code:codeCrypto,host:BACK_URL }) 
    }
  
    await transport.sendMail(
        mailOptions, 
        (error, res) => { 
            if (error) {
                console.error(error)
                return
            }
            console.log('Email sent')
        }
    )
}

module.exports = accountVerificationEmail