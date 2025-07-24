import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource';
import { data } from './data/resource';
import { storage } from './storage/resource';
import { PolicyStatement } from 'aws-cdk-lib/aws-iam';
import { sendEmail } from './functions/sendemail/resource';

/**
 * @see https://docs.amplify.aws/react/build-a-backend/ to add storage, functions, and more
 */
const backend = defineBackend( {
  auth,
  data,
  storage,
  sendEmail,
}
);

backend.sendEmail.resources.lambda.addToRolePolicy(
     new PolicyStatement({
     actions: ['ses:SendEmail', 'ses:SendRawEmail'],
     resources: ['*']
   })
)


