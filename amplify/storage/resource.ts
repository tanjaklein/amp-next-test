import { defineStorage } from '@aws-amplify/backend';

export const storage = defineStorage({
  name: 'allisonartimages1234567',
  access: (allow) => ({
    'profile-pictures/*': [
      allow.guest.to(['read']),
      allow.authenticated.to(['read', 'write', 'delete'])
    ],
    'picture-submissions/*': [
      allow.authenticated.to(['read','write']),
      allow.guest.to(['read','write'])
    ],
  })
});
