// app/not-found.js
import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      height: '100vh',
      textAlign: 'center',
      padding: '2rem',
      fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif'
    }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#1f2937' }}>404 - Page Not Found</h1>
      <p style={{ fontSize: '1.2rem', marginBottom: '2rem', color: '#4b5563' }}>
        The page you are looking for does not exist.
      </p>
      <Link 
        href="/" 
        style={{
          padding: '0.75rem 1.5rem',
          background: 'linear-gradient(135deg, #2563eb, #1e40af)',
          color: 'white',
          borderRadius: '0.375rem',
          textDecoration: 'none',
          fontWeight: '600',
          transition: 'all 0.3s ease'
        }}
      >
        Return Home
      </Link>
    </div>
  );
}