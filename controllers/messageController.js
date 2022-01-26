const dotenv = require("dotenv");
dotenv.config(process.env);
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER;
const client = require("twilio")(accountSid, authToken);

exports.sendMessage = async (req, res) => {
  try {
    let message = req.body.text;
    let response = await client.messages.create({
      body: `You have a message from ${message.name}: Email ${message.email}, saying : "${message.message}"`,
      from: twilioPhoneNumber,
      to: "+254778186406",
    });

    res.status(200).json(response);
  } catch (error) {
    res.status(500).json(error);
    console.error(error);
  }
};
