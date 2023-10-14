import Error from "next/error"

export default function Custom404() {
    return <h1>404 - Page Not Found</h1>
  }

  export default function Custom500() {
    return <h1>500 - Server-side error occurred</h1>
  }

  function Error({ statusCode }) {
    return (
      <p>
        {statusCode
          ? `An error ${statusCode} occurred on server`
          : 'An error occurred on client'}
      </p>
    )
  }
   
  Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404
    return { statusCode }
  }
   
  export default Error