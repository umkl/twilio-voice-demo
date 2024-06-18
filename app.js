import twilio from "twilio";

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const caller = process.env.TWILIO_PHONE_NUMBER_CALLER;
const receiver = process.env.TWILIO_PHONE_NUMBER_RECEIVER;

const createTwilioClient = (accountSid, authToken) => {
	return twilio(accountSid, authToken);
};
const client = createTwilioClient(accountSid, authToken);
client.calls
	.create({
		url: "https://handler.twilio.com/twiml/EH9aebf7432696a5bbca46b509f94369e4",
		from: caller,
		to: receiver,
	})
	.then((call) => console.log(call.sid));
