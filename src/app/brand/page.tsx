
"use client";

const values = [
  {
    number: "01",
    title: "고객 중심",
    description: "고객이 필요한 정보를 쉽게 찾고 서비스를 이해할 수 있도록 안내합니다.",
  },
  {
    number: "02",
    title: "신뢰와 투명성",
    description: "정확하고 명확한 정보 전달을 통해 고객과의 신뢰를 중요하게 생각합니다.",
  },
  {
    number: "03",
    title: "지속적인 개선",
    description: "고객의 이용 경험을 살피고 더 편리한 서비스 환경을 만들어 갑니다.",
  },
];

export default function BrandPage() {
  return (
    <main className="brand-page">
      <section className="brand-hero">
        <div className="brand-container">
          <p className="brand-eyebrow">ABOUT MEDITOWN</p>
          <h1>
            메디타운을
            <br />
            소개합니다
          </h1>
          <p className="brand-hero-text">
            고객에게 필요한 정보와 서비스를
            <br className="mobile-break" />
            더 쉽고 편리하게 연결합니다.
          </p>
        </div>
      </section>

      <section className="brand-intro brand-container">
        <p className="brand-section-label">WHO WE ARE</p>
        <h2>메디타운이 추구하는 방향</h2>
        <p className="brand-body">
          메디타운은 고객이 필요한 정보를 이해하고 적합한 서비스를
          찾아갈 수 있도록 돕는 것을 중요하게 생각합니다.
          명확한 안내와 편리한 이용 경험을 바탕으로 고객과의
          신뢰를 쌓아가겠습니다.
        </p>
      </section>

      <section className="brand-values">
        <div className="brand-container">
          <p className="brand-section-label">OUR VALUES</p>
          <h2>우리가 중요하게 생각하는 가치</h2>

          <div className="brand-value-grid">
            {values.map((value) => (
              <article className="brand-value-card" key={value.number}>
                <span className="brand-value-number">{value.number}</span>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="brand-contact brand-container">
        <div>
          <p className="brand-section-label">MEDITOWN</p>
          <h2>메디타운에 대해 더 알아보세요.</h2>
          <p className="brand-body">
            서비스와 지점에 관한 자세한 정보는 지점 안내에서 확인할 수 있습니다.
          </p>
        </div>
        <a className="brand-button" href="/branches">
          지점 안내 보기 <span aria-hidden="true">→</span>
        </a>
      </section>

      <style jsx>{`
        .brand-page {
          color: #183047;
          background: #fff;
        }

        .brand-container {
          width: min(1120px, calc(100% - 48px));
          margin: 0 auto;
        }

        .brand-hero {
          padding: 92px 0 100px;
          background: linear-gradient(120deg, #003366, #07558c);
          color: #fff;
        }

        .brand-eyebrow,
        .brand-section-label {
          margin: 0 0 18px;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 2px;
        }

        .brand-eyebrow {
          color: #91e4bd;
        }

        .brand-hero h1 {
          margin: 0;
          font-size: clamp(38px, 6vw, 64px);
          line-height: 1.25;
          letter-spacing: -2px;
        }

        .brand-hero-text {
          margin: 24px 0 0;
          color: #e0edf7;
          font-size: 18px;
          line-height: 1.9;
        }

        .mobile-break {
          display: none;
        }

        .brand-intro {
          padding-top: 84px;
          padding-bottom: 88px;
          max-width: 900px;
        }

        .brand-section-label {
          color: #16875c;
        }

        .brand-intro h2,
        .brand-values h2,
        .brand-contact h2 {
          margin: 0;
          font-size: clamp(27px, 4vw, 38px);
          line-height: 1.4;
          letter-spacing: -1px;
        }

        .brand-body {
          max-width: 760px;
          margin: 22px 0 0;
          color: #58697a;
          font-size: 17px;
          line-height: 1.95;
          word-break: keep-all;
        }

        .brand-values {
          padding: 78px 0 88px;
          background: #f3f7fa;
        }

        .brand-value-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 22px;
          margin-top: 38px;
        }

        .brand-value-card {
          min-height: 220px;
          padding: 30px;
          border: 1px solid #e1eaf0;
          border-radius: 16px;
          background: #fff;
        }

        .brand-value-number {
          color: #16875c;
          font-size: 14px;
          font-weight: 800;
          letter-spacing: 1px;
        }

        .brand-value-card h3 {
          margin: 22px 0 12px;
          font-size: 21px;
        }

        .brand-value-card p {
          margin: 0;
          color: #58697a;
          font-size: 15px;
          line-height: 1.8;
          word-break: keep-all;
        }

        .brand-contact {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 32px;
          padding-top: 78px;
          padding-bottom: 88px;
        }

        .brand-button {
          display: inline-flex;
          flex-shrink: 0;
          align-items: center;
          gap: 12px;
          padding: 15px 22px;
          border-radius: 8px;
          background: #003366;
          color: #fff;
          font-size: 15px;
          font-weight: 700;
        }

        .brand-button:hover {
          background: #07558c;
        }

        @media (max-width: 700px) {
          .brand-container {
            width: calc(100% - 36px);
          }

          .brand-hero {
            padding: 66px 0 72px;
          }

          .brand-hero-text {
            font-size: 16px;
          }

          .mobile-break {
            display: block;
          }

          .brand-intro {
            padding-top: 60px;
            padding-bottom: 62px;
          }

          .brand-values {
            padding: 60px 0;
          }

          .brand-value-grid {
            grid-template-columns: 1fr;
            gap: 14px;
            margin-top: 28px;
          }

          .brand-value-card {
            min-height: auto;
            padding: 24px;
          }

          .brand-value-card h3 {
            margin-top: 16px;
          }

          .brand-contact {
            align-items: flex-start;
            flex-direction: column;
            padding-top: 60px;
            padding-bottom: 64px;
          }

          .brand-body {
            font-size: 15px;
          }
        }
      `}</style>
    </main>
  );
}
