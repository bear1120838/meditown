import Link from "next/link";

export default function NewsPage() {
  return (
    <main
      className="mt-container"
      style={{ padding: "48px 20px", minHeight: "60vh" }}
    >
      <h1>메디타운 소식</h1>
      <p style={{ marginTop: "16px", lineHeight: 1.8 }}>
        메디타운의 새로운 소식과 공지사항을 확인할 수 있는 페이지입니다.
      </p>
      <p style={{ marginTop: "12px", lineHeight: 1.8 }}>
        등록된 소식이 없습니다.
      </p>
      <Link href="/" style={{ display: "inline-block", marginTop: "24px" }} >
        홈으로 돌아가기
      </Link>
    </main>
  );
}
