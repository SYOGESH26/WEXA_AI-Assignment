export default function Home() {
  return (
    <main style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      fontFamily: 'Arial, sans-serif',
      background: 'linear-gradient(135deg, #0f2027, #203a43, #2c5364)',
      color: 'white',
      textAlign: 'center',
      padding: '2rem'
    }}>
      <div>
        <h1>🚀 DevOps Internship at WEXA AI</h1>
        <p style={{ maxWidth: '600px', margin: '1rem auto', lineHeight: '1.6' }}>
          WEXA AI is looking for passionate students and fresh graduates for a <b>DevOps Intern</b> role.
          As an intern, you’ll work with cutting-edge technologies like Docker, Kubernetes, GitHub Actions,
          and AWS to automate and manage scalable deployments.
        </p>
        <h3>🔧 Responsibilities</h3>
        <ul style={{ textAlign: 'left', display: 'inline-block', lineHeight: '1.8' }}>
          <li>Assist in containerizing applications using Docker.</li>
          <li>Set up CI/CD pipelines using GitHub Actions.</li>
          <li>Deploy and manage apps on Kubernetes (Minikube / AWS EKS).</li>
          <li>Monitor builds, logs, and system performance.</li>
        </ul>
        <h3>🎓 Qualifications</h3>
        <ul style={{ textAlign: 'left', display: 'inline-block', lineHeight: '1.8' }}>
          <li>Basic knowledge of Linux, Git, and cloud services (AWS preferred).</li>
          <li>Understanding of containers and CI/CD workflows.</li>
          <li>Eagerness to learn DevOps tools and automation practices.</li>
        </ul>
        <p style={{ marginTop: '1rem', fontSize: '1.1rem' }}>
          💡 <b>Assignment:</b> Create and deploy a simple Next.js app using Docker, GitHub Actions, GHCR, and Minikube.
        </p>
        <p style={{ marginTop: '1rem', opacity: 0.8 }}>
          API test: <code>/api/hello</code>
        </p>
      </div>
    </main>
  );
}

