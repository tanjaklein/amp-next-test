import type { Schema } from "../../data/resource"



import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";

const sesClient = new SESClient({ region: "us-east-1" });

export const handler: Schema["SendEmail"]["functionHandler"] = async (event) => {
  
 const name = event.arguments.name;
 const recipient = event.arguments.recipient; 
 const subject = event.arguments.subject;
 const body = event.arguments.body;
 const source = event.arguments.source;

  const command = new SendEmailCommand({
    Source: source,
    Destination: {
      ToAddresses: [recipient],
    },
    Message: {
      Body: {
        Text: { Data: body },
        Html: { Data: `<html><body>${body}</body></html>` },
      },

      Subject: { Data: subject },
    },
  });

  try {
    const result = await sesClient.send(command);
    console.log(`Email sent to ${recipient}: ${result.MessageId}`);
  } catch (error) {
    console.error(`Error sending email to ${recipient}: ${error}`);
    throw new Error(`Failed to send email to ${recipient}`, { cause: error });
  }

  return `Hello email, ${name}!`;
};