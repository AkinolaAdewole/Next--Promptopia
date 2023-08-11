'use client';

import { SessionProvider } from "next-auth/react";

const Provider = ({ children, session }) => {
  <SessionProvider session={session}>
    {children}
  </SessionProvider>
  return (
    <div>Provider</div>
  )
}

export default Provider