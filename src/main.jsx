import React, { Component, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
import App from './App.jsx'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
    this.setState({ errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          padding: '3rem',
          maxWidth: '800px',
          margin: '2rem auto',
          background: '#fff',
          border: '2px solid #ef4444',
          borderRadius: '12px',
          fontFamily: 'monospace',
          color: '#111'
        }}>
          <h2 style={{ color: '#ef4444', marginBottom: '1rem' }}>Application Render Error</h2>
          <p style={{ fontWeight: 'bold', marginBottom: '1rem' }}>{this.state.error?.toString()}</p>
          <pre style={{
            background: '#f8f8f8',
            padding: '1rem',
            borderRadius: '8px',
            overflowX: 'auto',
            fontSize: '12px'
          }}>
            {this.state.errorInfo?.componentStack}
          </pre>
        </div>
      );
    }
    return this.props.children;
  }
}

// Global error banner for syntax or unhandled errors
window.addEventListener('error', (event) => {
  const root = document.getElementById('root');
  if (root && root.children.length === 0) {
    root.innerHTML = `
      <div style="padding: 2rem; max-width: 800px; margin: 2rem auto; background: #fff; border: 2px solid #ef4444; border-radius: 12px; font-family: monospace; color: #111;">
        <h2 style="color: #ef4444; margin-bottom: 1rem;">JavaScript Runtime Error</h2>
        <p><strong>${event.message}</strong></p>
        <p style="color: #666; font-size: 13px;">at ${event.filename}:${event.lineno}:${event.colno}</p>
        <pre style="background: #f8f8f8; padding: 1rem; border-radius: 8px; font-size: 12px; overflow: auto;">${event.error ? event.error.stack : 'No stack trace available'}</pre>
      </div>
    `;
  }
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>,
)
