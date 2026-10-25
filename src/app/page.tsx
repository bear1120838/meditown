"use client";

import { useEffect, useRef, useState } from "react";

function createButtonRipple(event: React.MouseEvent<HTMLElement>) {
  const button = event.currentTarget;
  const rect = button.getBoundingClientRect();

  const ripple = document.createElement("span");
  const size = Math.max(rect.width, rect.height) * 2;

  ripple.style.cssText = `
    position: absolute;
    width: ${size}px;
    height: ${size}px;
    left: ${event.clientX - rect.left - size / 2}px;
    top: ${event.clientY - rect.top - size / 2}px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.4);
    transform: scale(0);
    animation: buttonRipple 0.65s ease-out forwards;
    pointer-events: none;
    z-index: 0;
  `;

  button.appendChild(ripple);

  ripple.addEventListener("animationend", () => {
    ripple.remove();
  });
}

const colors = {
  blue: "#1E90FF",
  deep: "#003366",
  green: "#32CD32",
  ink: "#263746",
  muted: "#647789",
  line: "#DCE7F0",
  pale: "#F3F9FD",
};

const slides = [
  {
    eyebrow: "Healthcare & Wellness Retail Complex, CLOSER TO YOU",
    title: "복합 헬스케어 리테일 \n플랫폼, 메디타운",
    description: "가까운 곳에서 편리하게 만나는 우리 가족의 건강 관리 파트너",
    button: "가까운 지점 찾기",
    href: "/branches",
  },
  {
    eyebrow: "CARE THAT CONNECTS",
    title: "사람과 건강을\n가깝게 연결합니다",
    description: "이용자에게 필요한 정보를 쉽고 정확하게 안내합니다.",
    button: "메디타운 소개",
    href: "/about",
  },
  {
    eyebrow: "GROW WITH MEDITOWN",
    title: "함께 만드는\n더 나은 건강 경험",
    description: "메디타운과 함께할 약국 및 가맹 파트너를 기다립니다.",
    button: "가맹 상담 문의",
    href: "/contact",
  },
];

const branches = [
  { name: "메디타운 지점 안내", description: "가까운 지점의 위치와 운영 정보를 확인하세요.", icon: "⌖" },
  { name: "약국 이용 안내", description: "약국 관련 문의와 이용 정보를 확인하세요.", icon: "＋" },
  { name: "방문 전 확인 사항", description: "방문 전 운영 시간과 상세 정보를 확인해 주세요.", icon: "✓" },
];

export default function HomePage() {
  const [slideIndex, setSlideIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);
  const [selectedCard, setSelectedCard] = useState<string | null>(null);
  const [selectedValue, setSelectedValue] = useState<string | null>(null);
  const [selectedNews, setSelectedNews] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setImageIndex((current) => (current + 1) % 5);
    }, 3000);

    return () => clearInterval(timer);
  }, []);
  const slide = slides[slideIndex];

  return (
    <main className="mt-site">
      <style jsx global>{`
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; scroll-padding-top: 88px; }
        body { margin: 0; color: ${colors.ink}; font-family: "Noto Sans KR", "Apple SD Gothic Neo", "Malgun Gothic", sans-serif; }
        a { color: inherit; text-decoration: none; }
        button { font: inherit; }
        .mt-site { --mt-blue: ${colors.blue}; --mt-deep: ${colors.deep}; --mt-green: ${colors.green}; --mt-line: ${colors.line}; }
        .mt-wrap { width: min(1160px, calc(100% - 40px)); margin: 0 auto; }
        .mt-header { position: sticky; top: 0; z-index: 20; background: rgba(255,255,255,.96); border-bottom: 1px solid ${colors.line}; backdrop-filter: blur(12px); }
        .mt-header-inner { min-height: 76px; display: flex; align-items: center; justify-content: space-between; gap: 20px; }
        .mt-logo { display: flex; align-items: center; gap: 11px; color: ${colors.deep}; }
        .mt-logo-mark { display: grid; place-items: center; width: 42px; height: 42px; border-radius: 13px; background: ${colors.blue}; color: white; font-size: 24px; font-weight: 900; box-shadow: inset 0 -4px 0 rgba(0,0,0,.08); }
        .mt-logo-name { font-size: 21px; line-height: 1.1; font-weight: 900; letter-spacing: .04em; }
        .mt-logo-sub { display: block; margin-top: 4px; color: ${colors.muted}; font-size: 10px; font-weight: 500; letter-spacing: .13em; }
        .mt-nav { display: flex; align-items: center; gap: 27px; color: ${colors.deep}; font-size: 14px; font-weight: 700; }
        .mt-nav a:hover { color: ${colors.blue}; }
        .mt-btn { display: inline-flex; align-items: center; justify-content: center; min-height: 46px; padding: 0 19px; border: 0; border-radius: 12px; background: ${colors.blue}; color: white; font-size: 14px; font-weight: 800; cursor: pointer; transition: transform .18s, box-shadow .18s; }
        .mt-btn:hover { transform: translateY(-2px);  box-shadow: 0 8px 20px rgba(30,144,255,.22); color: white; }
        .mt-hero-actions .mt-btn span {  color: inherit;  opacity: 1;  visibility: visible; }
        .mt-btn-outline { background: white; color: ${colors.deep}; box-shadow: inset 0 0 0 1px ${colors.line}; }
        .mt-menu-button { display: none; width: 44px; height: 44px; border: 1px solid ${colors.line}; border-radius: 12px; background: white; color: ${colors.deep}; font-size: 23px; cursor: pointer; }
        .mt-mobile-menu { display: none; padding: 0 0 16px; }
        .mt-hero { position: relative; overflow: hidden; background: linear-gradient(115deg, #F0F9FF 0%, #FFFFFF 56%, #EEFBEE 100%); }
        .mt-hero-inner { min-height: 490px; display: grid; grid-template-columns: 1.08fr .92fr; align-items: center; gap: 30px; padding-top: 42px; padding-bottom: 42px; }
        .mt-eyebrow { color: ${colors.blue}; font-size: 12px; font-weight: 900; letter-spacing: .18em; }
        .mt-hero h1 { margin: 18px 0 18px; white-space: pre-line; color: ${colors.deep}; font-size: clamp(38px, 4.7vw, 60px); line-height: 1.22; letter-spacing: -.055em; }
        .mt-hero p { max-width: 510px; margin: 0; color: ${colors.muted}; font-size: 17px; line-height: 1.85; }
        .mt-hero-actions { display: flex; flex-wrap: wrap; gap: 11px; margin-top: 29px; }
        .mt-hero-dots { display: flex; gap: 8px; margin-top: 30px; }
        .mt-dot { width: 9px; height: 9px; padding: 0; border: 0; border-radius: 99px; background: #B9CAD8; cursor: pointer; }
        .mt-dot.active { width: 28px; background: ${colors.blue}; }
        .mt-visual { position: relative; display: grid; place-items: center; min-height: 350px; }
        .mt-orb { position: absolute; width: min(360px, 85%); aspect-ratio: 1; border-radius: 43% 57% 58% 42% / 44% 44% 56% 56%; background: linear-gradient(145deg, #C8E9FF, #E8F9E8); transform: rotate(-8deg); }
        .mt-card-visual { position: relative; display: grid; place-items: center; width: min(320px, 78%); aspect-ratio: 1 / .86; border: 1px solid rgba(255,255,255,.9); border-radius: 30px; background: rgba(255,255,255,.82); box-shadow: 0 24px 60px rgba(0,51,102,.12); animation: cardGlow 4s ease-in-out infinite; }
        .mt-card-visual img { animation: imageFade 0.8s ease-in-out;}
            @keyframes imageFade {
              from {
                opacity: 0;
              }
              to {
                opacity: 1;
              }
            }
            @keyframes cardGlow {
              0%, 100% {
                box-shadow: 0 20px 45px rgba(0, 51, 102, 0.10);
              }
              50% {
                box-shadow: 0 30px 75px rgba(0, 102, 180, 0.35);
              }
            }
        .mt-cross { display: grid; place-items: center; width: 118px; height: 118px; border-radius: 32px; background: ${colors.blue}; color: white; font-size: 86px; font-weight: 400; line-height: 1; box-shadow: 0 15px 30px rgba(30,144,255,.25); }
        .mt-float-label { position: absolute; padding: 12px 16px; border: 1px solid ${colors.line}; border-radius: 14px; background: white; color: ${colors.deep}; font-size: 13px; font-weight: 800; box-shadow: 0 10px 28px rgba(0,51,102,.09); }
        .mt-float-label.one { top: 13%; left: 0; } .mt-float-label.two { right: 0; bottom: 13%; }
        .mt-section { padding: 82px 0; }
        .mt-section.pale { background: ${colors.pale}; }
        .mt-section-head { display: flex; align-items: end; justify-content: space-between; gap: 20px; margin-bottom: 30px; }
        .mt-section h2 { margin: 10px 0 0; color: ${colors.deep}; font-size: clamp(28px, 3vw, 38px); letter-spacing: -.04em; }
        .mt-section-head p { max-width: 480px; margin: 0; color: ${colors.muted}; line-height: 1.8; }
        .mt-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; }
        .mt-feature { padding: 27px; border: 1px solid ${colors.line}; border-radius: 20px; background: white; transition: transform .18s, box-shadow .18s; }
        .mt-feature:hover {  transform: translateY(-6px);  box-shadow: 0 18px 40px rgba(0, 51, 102, 0.12);  border-color: #c5e2f5; }
        .mt-feature.is-selected {  background: #eaf6ff;  border-color: #75b7e5;  box-shadow: 0 8px 24px rgba(0, 86, 168, 0.14);}
        .mt-feature-icon {  display: grid;  place-items: center;  width: 56px;  height: 56px;  margin-bottom: 21px;  border-radius: 18px;  background: linear-gradient(145deg, #EAF6FF, #D8ECFF);  color: ${colors.blue};  font-size: 30px;  font-weight: 900;  box-shadow: 0 5px 14px rgba(30, 144, 255, 0.10); transition: transform 0.25s ease, box-shadow 0.25s ease;}
        .mt-feature h3 {  margin: 0 0 12px;  color: ${colors.deep};  font-size: 20px;  font-weight: 800;  line-height: 1.5;  letter-spacing: -0.4px;}
        .mt-feature p { margin: 0; color: ${colors.muted}; font-size: 15px; line-height: 1.9; letter-spacing: -0.2px;}
        .mt-about { display: grid; grid-template-columns: .9fr 1.1fr; align-items: center; gap: 55px; }
        .mt-about-visual {  display: grid;  place-items: center;  min-height: 300px;  border-radius: 26px;  background: linear-gradient(145deg, #E6F5FF, #EAFBEA);  box-shadow: 0 14px 35px rgba(0, 51, 102, 0.08); }
        .mt-about-symbol { display: grid; place-items: center; width: 150px; height: 150px; border-radius: 42px; background: white; color: ${colors.blue}; font-size: 100px; box-shadow: 0 15px 35px rgba(0,51,102,.09); }
        .mt-about-copy p {   margin: 0 0 16px;  color: ${colors.muted};  font-size: 15px;  line-height: 1.95;  letter-spacing: -0.2px; }
        .mt-values { display: grid; grid-template-columns: repeat(3, 1fr); gap: 13px; margin-top: 24px; }
        .mt-value {  padding: 18px;  border: 1px solid ${colors.line};  border-radius: 16px;  background: ${colors.pale};  transition: transform 0.25s ease, box-shadow 0.25s ease;  }
        .mt-value:hover {   transform: translateY(-3px);  box-shadow: 0 8px 20px rgba(0, 51, 102, 0.08);  }
        .mt-value.is-selected {  background: #eaf6ff;  border: 1px solid #75b7e5;  box-shadow: 0 8px 24px rgba(0, 86, 168, 0.14); }
        .mt-value.is-selected b {  color: #075da8; }
        .mt-feature.is-selected { background: #eaf6ff; border-color: #75b7e5; box-shadow: 0 8px 24px rgba(0, 86, 168, 0.14); }
        .mt-feature.is-selected h3 { color: #075da8; }
        .mt-feature.is-selected .mt-feature-icon { background: linear-gradient(145deg, #d6edff, #b9dcff); color: #075da8; box-shadow: 0 6px 16px rgba(0, 86, 168, 0.16); }
        .mt-value b {  display: block;  color: ${colors.deep};  font-size: 16px;  font-weight: 800;  line-height: 1.5;  }
        .mt-value span {   display: block;  margin-top: 8px;  color: ${colors.muted};  font-size: 13px;   line-height: 1.7;  }
        .mt-cta { display: flex; align-items: center; justify-content: space-between; gap: 24px; padding: 36px 40px; border-radius: 24px; background: ${colors.deep}; color: white; }
        .mt-cta h2 { color: white; font-size: 29px; }
        .mt-cta p { margin: 10px 0 0; color: #D7E7F5; line-height: 1.8; }
        .mt-cta .mt-btn { background: ${colors.green}; color: ${colors.deep}; flex-shrink: 0; }
        .mt-footer { padding: 32px 0 42px; border-top: 1px solid ${colors.line}; color: ${colors.muted}; font-size: 12px; line-height: 1.9; }
        .mt-footer strong { color: ${colors.deep}; font-size: 15px; letter-spacing: .06em; }
        @media (max-width: 850px) {
          .mt-nav { display: none; } .mt-menu-button { display: block; }
          .mt-mobile-menu { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; }
          .mt-mobile-menu a { padding: 12px; border-radius: 10px; background: ${colors.pale}; color: ${colors.deep}; font-size: 14px; font-weight: 700; }
          .mt-hero-inner { grid-template-columns: 1fr; padding-top: 55px; gap: 10px; }
          .mt-hero-copy { text-align: center; } .mt-hero p { margin: 0 auto; } .mt-hero-actions, .mt-hero-dots { justify-content: center; }
          .mt-visual { min-height: 300px; } .mt-orb { width: 270px; } .mt-card-visual { width: 245px; }
          .mt-section { padding: 62px 0; } .mt-section-head { display: block; } .mt-section-head p { margin-top: 13px; }
          .mt-grid { grid-template-columns: 1fr; } .mt-about { grid-template-columns: 1fr; gap: 28px; }
          .mt-cta { align-items: flex-start; flex-direction: column; padding: 28px; }
        }
        @media (max-width: 420px) { .mt-wrap { width: min(100% - 28px, 1160px); } .mt-logo-name { font-size: 18px; } .mt-hero h1 { font-size: 38px; } .mt-hero p { font-size: 15px; } .mt-values { grid-template-columns: 1fr; } }
      `}</style>

      <header className="mt-header">
        <div className="mt-wrap mt-header-inner">
          <a className="mt-logo" href="#home" aria-label="메디타운 홈">
            <span className="mt-logo-mark">＋</span>
            <span><span className="mt-logo-name">MEDITOWN</span><span className="mt-logo-sub">HEALTHCARE NETWORK</span></span>
          </a>
          <nav className="mt-nav" aria-label="주 메뉴">
            <a href="/brand">메디타운 소개</a>
            <a href="/branches">지점 안내</a>
            <a href="/news">소식</a>
            <a href="/contact">고객 문의</a>
            <a className="mt-btn"  href="/contact"  onClick={createButtonRipple}>  <span className="mt-btn-label">가맹 상담 문의</span></a>
          </nav>
          <button className="mt-menu-button" type="button" aria-label="메뉴 열기" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? "×" : "☰"}</button>
        </div>
        {menuOpen && <nav className="mt-wrap mt-mobile-menu" aria-label="모바일 메뉴">
          <a href="/brand" onClick={() => setMenuOpen(false)}>메디타운 소개</a>
          <a href="/branches" onClick={() => setMenuOpen(false)}>지점 안내</a>
          <a href="/news" onClick={() => setMenuOpen(false)}>소식</a>
          <a href="/contact" onClick={() => setMenuOpen(false)}>고객 문의</a>
        </nav>}
      </header>
      <div className="mt-top-banner">
        <img
          src="/main_meditown.png"
          alt="메디타운"
        />
        <div className="mt-bubbles" aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
      </div>
      <section className="mt-hero" id="home">
        <div className="mt-wrap mt-hero-inner">
          <div className="mt-hero-copy">
            <div className="mt-eyebrow">{slide.eyebrow}</div>
            <h1>{slide.title}</h1>
            <p>{slide.description}</p>
            <div className="mt-hero-actions">
              <a className="mt-btn"  href={slide.href}  onClick={createButtonRipple}>
              <span className="mt-btn-label">{slide.button} <span aria-hidden="true">→</span>  </span> </a>
              <a className="mt-btn mt-btn-outline"  href="/about"  onClick={createButtonRipple}>  <span className="mt-btn-label">메디타운 알아보기</span></a>
            </div>
            <div className="mt-hero-dots" aria-label="메인 화면 선택">
              {slides.map((item, index) => <button key={item.eyebrow} className={`mt-dot ${index === slideIndex ? "active" : ""}`} type="button" aria-label={`${index + 1}번 화면`} aria-current={index === slideIndex} onClick={() => setSlideIndex(index)} />)}
            </div>
          </div>
          <div className="mt-visual" aria-label="메디타운을 상징하는 그래픽">
          <div className="mt-orb" />

          <div className="mt-card-visual">
            <img
              key={imageIndex}
              src={[
                "/1_Meditown.png",
                "/2_Pharmacy.png",
                "/3_Beauty.png",
                "/4_Health.png",
                "/5_Lifestyle.png",
              ][imageIndex]}
              alt="메디타운 상징 이미지"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                display: "block",
              }}
            />
          </div>

          <div className="mt-float-label one">✓ 가까운 건강 파트너</div>
          <div className="mt-float-label two">＋ 건강한 일상 연결</div>
        </div>
        </div>
      </section>

      <section className="mt-section" id="branches">
        <div className="mt-wrap">
          <div className="mt-section-head">
            <div><div className="mt-eyebrow">MEDITOWN SERVICES</div><h2>필요한 정보를 한곳에서</h2></div>
            <p>메디타운 이용에 필요한 지점 정보와 약국 안내를 쉽고 편리하게 확인할 수 있도록 돕습니다.</p>
          </div>
          <div className="mt-grid">
            {branches.map((item) => <article  className={`mt-feature ${selectedCard === item.name ? "is-selected" : ""}`}  key={item.name}  onClick={() => setSelectedCard(item.name)} >
              <div className="mt-feature-icon" aria-hidden="true">{item.icon}</div>
              <h3>{item.name}</h3><p>{item.description}</p>
              <a href="/contact" style={{ display: "inline-flex", marginTop: 18, color: colors.blue, fontSize: 14, fontWeight: 800 }}>자세히 보기 <span style={{ marginLeft: 7 }}>→</span></a>
            </article>)}
          </div>
        </div>
      </section>
      <section className="mt-section pale" id="about">
        <div className="mt-wrap mt-about">
          <div className="mt-about-visual">
            <img
              src="/meditown-building.png"
              alt="메디타운 건물 전경"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "24px",
                display: "block",
              }}
            />
          </div>
          <div className="mt-about-copy">
            <div className="mt-eyebrow">ABOUT MEDITOWN</div>
            <h2 style={{ margin: "10px 0 16px", color: colors.deep, fontSize: "clamp(28px, 3vw, 38px)", letterSpacing: "-.04em" }}>건강한 일상에 가까이,<br />신뢰할 수 있는 안내를</h2>
            <p>메디타운은 고객이 필요한 건강 관련 정보를 보다 쉽게 확인하고, 가까운 약국 및 지점과 연결될 수 있도록 돕는 서비스를 지향합니다.</p>
            <p>이 페이지는 홈페이지 기본 화면입니다. 회사 소개, 운영 지점, 실제 서비스와 연락처 등은 확정된 회사 자료를 받아 정확하게 반영할 수 있습니다.</p>
            <div className="mt-values">
              <div className={`mt-value ${selectedValue === "신뢰" ? "is-selected" : ""}`}  onClick={() => setSelectedValue("신뢰")} > <b>신뢰</b> <span>정확하고 이해하기 쉬운 정보</span> </div>
              <div className={`mt-value ${selectedValue === "접근성" ? "is-selected" : ""}`}  onClick={() => setSelectedValue("접근성")} > <b>접근성</b> <span>필요한 정보를 편리하게 확인</span> </div>
              <div className={`mt-value ${selectedValue === "연결" ? "is-selected" : ""}`}  onClick={() => setSelectedValue("연결")} > <b>연결</b>  <span>고객과 파트너를 이어주는 서비스</span> </div>
            </div>
             <a
              href="/brand"
              style={{
                display: "inline-block",
                marginTop: "24px",
                padding: "12px 24px",
                background: colors.deep,
                color: "#ffffff",
                borderRadius: "8px",
                textDecoration: "none",
                fontWeight: 600,
              }}
            >
              회사 소개 자세히 보기 →
            </a>
          </div>
        </div>
      </section>

      <section className="mt-section" id="news">
        <div className="mt-wrap">
          <div className="mt-section-head">
            <div><div className="mt-eyebrow">NEWS & NOTICE</div><h2>메디타운 소식</h2></div>
            <p>공지사항과 새로운 소식을 이 영역에 게시할 수 있습니다.</p>
          </div>
          <div className={`mt-feature ${selectedNews ? "is-selected" : ""}`}  style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 20 }}  onClick={() => setSelectedNews((current) => !current)} >
            <div><span className="mt-eyebrow">NOTICE</span><h3 style={{ marginTop: 9 }}>새로운 소식이 준비 중입니다.</h3><p>공식 공지와 이벤트 정보를 추후 이곳에서 확인할 수 있습니다.</p></div>
            <span aria-hidden="true" style={{ color: colors.blue, fontSize: 36 }}>→</span>
          </div>
        </div>
      </section>

      <section className="mt-section pale" id="contact">
        <div className="mt-wrap">
          <div className="mt-cta">
            <div><h2>메디타운과 함께하고 싶으신가요?</h2><p>약국 문의 및 가맹 상담을 위한 연락처와 신청 양식을 이 영역에 연결할 수 있습니다.</p></div>
            <a className="mt-btn"  href="/branches"  onClick={createButtonRipple}>  <span className="mt-btn-label">    지점 안내 보기 <span aria-hidden="true">→</span> </span></a>
          </div>
        </div>
      </section>

      <footer className="mt-footer">
        <div className="mt-wrap">
          <strong>MEDITOWN</strong>
          <div>상호·대표자·사업자등록번호·고객센터 등 공식 회사 정보는 확인 후 입력해야 합니다.</div>
          <div>© {new Date().getFullYear()} MEDITOWN. All rights reserved.</div>
        </div>
      </footer>
    </main>
  );
}
