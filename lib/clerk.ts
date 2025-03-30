import { currentUser } from '@clerk/nextjs/server';

export type ClerkUserLike = {
  id: string;
  firstName: string | null;
  lastName: string | null;
  emailAddresses: Array<{ emailAddress: string }>;
  imageUrl?: string;
};

export const mockClerkUser: ClerkUserLike = {
  id: 'local-user',
  firstName: 'Local',
  lastName: 'User',
  emailAddresses: [{ emailAddress: 'local-user@example.com' }],
  imageUrl: '',
};

export const isClerkConfigured = () => {
  const publishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;
  const secretKey = process.env.CLERK_SECRET_KEY;

  return Boolean(
    publishableKey &&
      secretKey &&
      publishableKey.startsWith('pk_') &&
      secretKey.startsWith('sk_')
  );
};

export const getCurrentClerkUser = async (): Promise<ClerkUserLike> => {
  if (!isClerkConfigured()) {
    return mockClerkUser;
  }

  try {
    const user = await currentUser();
    return (
      user ?? {
        id: 'local-user',
        firstName: 'Local',
        lastName: 'User',
        emailAddresses: [{ emailAddress: 'local-user@example.com' }],
        imageUrl: '',
      }
    );
  } catch {
    return mockClerkUser;
  }
};
