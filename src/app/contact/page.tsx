import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="mt-container" style={{ padding: "48px 20px", minHeight: "60vh" }}>
      <h1>가맹 상담 문의</h1>
      <p style={{ marginTop: "16px", lineHeight: 1.8 }}>
        메디타운 가맹 및 사업 관련 문의를 위한 페이지입니다.
      </p>
      <p style={{ marginTop: "12px", lineHeight: 1.8 }}>
        상담을 원하시면 메디타운으로 문의해 주세요.
      </p>
      <Link href="/" style={{ display: "inline-block", marginTop: "24px" }} >
        홈으로 돌아가기
      </Link>      
    </main>
  );
}
