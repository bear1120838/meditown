
"use client";

import Link from "next/link";

const branches = [
  {
    name: "고양 일산 지점",
    address: "경기도 고양시 일산서구 경의로 953 3동 1층",
    phone: "031-913-9739",
  },
  {
    name: "강원 춘천 지점",
    address: "강원특별자치도 춘천시 동면 춘천순환로 446 1층",
    phone: "0507-1320-5789",
  },
  {
    name: "강원 원주 지점",
    address: "강원특별자치도 원주시 현충로 305 1층",
    phone: "0507-1326-8892",
  },
  {
    name: "전북 전주 지점",
    address: "전북특별자치도 전주시 덕진구 인교9길 9 1층 102호",
    phone: "0507-1395-0678",
  },
];

export default function BranchesPage() {
  return (
    <main style={{ minHeight: "100vh", background: "#f7f9fc", color: "#18334d" }}>
      <header style={{ background: "#fff", borderBottom: "1px solid #e5eaf0", padding: "20px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <Link href="/" style={{ color: "#18334d", textDecoration: "none", fontWeight: 700 }}>
            ← 메디타운 홈으로
          </Link>
        </div>
      </header>

      <section style={{ maxWidth: "1100px", margin: "0 auto", padding: "56px 20px" }}>
        <p style={{ color: "#16856b", fontWeight: 700, letterSpacing: "2px" }}>
          MEDITOWN BRANCHES
        </p>
        <h1 style={{ fontSize: "clamp(32px, 5vw, 46px)", margin: "12px 0" }}>
          지점 안내
        </h1>
        <p style={{ color: "#64748b", lineHeight: 1.8 }}>
          메디타운 지점의 위치와 연락처를 확인하세요.
        </p>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
          gap: "20px",
          marginTop: "36px",
        }}>
          {branches.map((branch) => (
            <article key={branch.phone} style={{
              background: "#fff",
              border: "1px solid #e5eaf0",
              borderRadius: "16px",
              padding: "26px",
              boxShadow: "0 6px 24px rgba(24,51,77,0.04)",
            }}>
              <div style={{
                width: "46px",
                height: "46px",
                borderRadius: "12px",
                background: "#e7f5f0",
                color: "#16856b",
                display: "grid",
                placeItems: "center",
                fontSize: "23px",
                marginBottom: "18px",
              }}>
                +
              </div>

              <h2 style={{ fontSize: "21px", margin: "0 0 16px" }}>
                {branch.name}
              </h2>

              <p style={{ color: "#64748b", lineHeight: 1.8, minHeight: "58px" }}>
                {branch.address}
              </p>

              <p style={{ margin: "18px 0", fontWeight: 600 }}>
                <span style={{ marginRight: "8px" }}>전화</span>
                <a href={`tel:${branch.phone}`} style={{ color: "#16856b", textDecoration: "none" }}>
                  {branch.phone}
                </a>
              </p>

              <a
                href={`https://map.kakao.com/link/search/${encodeURIComponent(branch.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "block",
                  textAlign: "center",
                  marginTop: "20px",
                  padding: "13px 16px",
                  background: "#18334d",
                  color: "#fff",
                  borderRadius: "8px",
                  textDecoration: "none",
                  fontWeight: 600,
                }}
              >
                카카오맵에서 위치 보기 →
              </a>
            </article>
          ))}
        </div>

        <div style={{ marginTop: "36px" }}>
          <Link href="/" style={{
            display: "inline-block",
            padding: "12px 22px",
            border: "1px solid #d6dee8",
            borderRadius: "8px",
            color: "#18334d",
            textDecoration: "none",
            background: "#fff",
          }}>
            메인 홈페이지로 돌아가기
          </Link>
        </div>
      </section>
    </main>
  );
}
