import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="section">
      <div className="container">
        <h1>页面未找到</h1>
        <p className="desc">你访问的页面不存在，可能已调整路径。</p>
        <div className="btn-row">
          <Link href="/" className="btn btn-primary">返回首页</Link>
        </div>
      </div>
    </main>
  );
}
