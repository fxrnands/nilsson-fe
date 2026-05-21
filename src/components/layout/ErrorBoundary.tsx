import { Component, type ReactNode } from 'react'

interface ErrorBoundaryProps {
  children: ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true }
  }

  componentDidCatch(): void {
    /* Fallback UI is shown; hook for future error reporting (e.g. Sentry). */
  }

  private handleRetry = (): void => {
    this.setState({ hasError: false })
  }

  render(): ReactNode {
    if (!this.state.hasError) {
      return this.props.children
    }

    return (
      <div
        role="alert"
        className="flex min-h-svh flex-col items-center justify-center gap-6 bg-white px-6 text-center"
      >
        <h1 className="font-general text-section font-medium text-ink">Something went wrong</h1>
        <p className="max-w-md font-satoshi text-body text-neutral-800">
          The page could not be displayed. Try refreshing, or return home.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            type="button"
            onClick={this.handleRetry}
            className="inline-flex h-[47px] min-w-[151px] items-center justify-center rounded-[8px] bg-ink px-4 font-general text-cta-mobile font-medium capitalize text-white transition-opacity hover:opacity-90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex h-[47px] min-w-[151px] items-center justify-center rounded-[8px] border border-ink px-4 font-general text-cta-mobile font-medium capitalize text-ink transition-opacity hover:opacity-90"
          >
            Go home
          </a>
        </div>
      </div>
    )
  }
}
