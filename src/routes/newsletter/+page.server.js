import { fail } from '@sveltejs/kit';

const BE_API_URL = 'http://localhost:3000/api/subscription/subscribe';

export const actions = {
  default: async ({ request }) => {
    try {
      const formData = await request.formData();

      const subscriptionData = {
        email: formData.get('email')?.trim(),
      };

      const response = await fetch(BE_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(subscriptionData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        return fail(response.status, {
          message: errorData.message || 'Failed to subscribe',
        });
      }

      const result = await response.json();

      return {
        success: true,
        message: 'Successfully subscribed!',
      };
    } catch (error) {
      return fail(500, {
        message: 'An error occurred: ' + error.message,
      });
    }
  },
};
