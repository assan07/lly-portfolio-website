import Link from 'next/link'
import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { AdminSidebar } from './_components/AdminSidebar'
import { AdminTopbar } from './_components/AdminTopbar'
export const metadata = {
  title: {
    default: 'Admin Dashboard',
    template: '%s | Admin Dashboard',
  },

  description: 'Administrator dashboard for managing portfolio content.',

  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
      nosnippet: true,
    },
  },
}

async function AdminLayout({ children }) {
  // login page has its own layout
  return <div className="min-h-screen">{children}</div>
}

export default AdminLayout
