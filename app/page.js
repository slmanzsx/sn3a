import Link from 'next/link'

function getLang(searchParams) {
  const lang = (searchParams?.lang || 'ar').toLowerCase()
  return (lang === 'en') ? 'en' : 'ar'
}

export default function Home({ searchParams }) {
  const lang = getLang(searchParams)
  const t = (lang==='ar') ? {
    brandAr:'صَنْعَة', brandEn:'Sn3a',
    search:'ابحث عن منتجات يدوية', hero:'اكتشف قطعًا صنعت بحُب', browse:'تصفح الفئات', sell:'ابدأ البيع',
    trending:'الأكثر رواجًا', why:'لماذا صَنْعة؟', escrow:'حماية المشتري (Escrow)', pay:'وسائل دفع محلية', ship:'شحن موثوق',
    langSwitch:'English'
  } : {
    brandAr:'صَنْعَة', brandEn:'Sn3a',
    search:'Search handmade products', hero:'Discover handmade pieces crafted with love', browse:'Browse Categories', sell:'Start Selling',
    trending:'Trending', why:'Why Sn3a?', escrow:'Buyer Protection (Escrow)', pay:'Local payment methods', ship:'Reliable shipping',
    langSwitch:'العربية'
  }
  const dir = (lang==='ar') ? 'rtl' : 'ltr'
  const products = [
    {id:'1', title: (lang==='ar'?'سبحة خرز طبيعي يدوي':'Handmade bead misbaha'), price: 89, img:'https://picsum.photos/seed/beads/800/600'},
    {id:'2', title: (lang==='ar'?'فخار مزخرف — قطعة واحدة':'Decorated pottery'), price:149, img:'https://picsum.photos/seed/pottery/800/600'},
    {id:'3', title: (lang==='ar'?'لوحة بخط عربي':'Arabic calligraphy wall art'), price:220, img:'https://picsum.photos/seed/calligraphy/800/600'},
    {id:'4', title: (lang==='ar'?'حقيبة قماش مطرّزة':'Embroidered canvas tote'), price:120, img:'https://picsum.photos/seed/bags/800/600'},
  ]
  const langHref = (lang==='ar') ? '/?lang=en' : '/?lang=ar'

  return (
    <div dir={dir}>
      <header className="header">
        <div className="header-inner container" style={{display:'flex'}}>
          <div className="brand">{t.brandAr} <span className="sep">|</span> <span style={{color:'#222'}}>{t.brandEn}</span></div>
          <div style={{flex:1}} />
          <input className="input" placeholder={t.search} />
          <Link href="/cart" style={{marginInlineStart:8}}>🛒</Link>
          <Link href={langHref} className="btn" style={{marginInlineStart:8}}>{t.langSwitch}</Link>
        </div>
      </header>

      <main className="container">
        <section className="hero" style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:16}}>
          <div>
            <h1 style={{fontSize:28,fontWeight:900,margin:'0 0 8px'}}>{t.hero} ❤️</h1>
            <p style={{color:'#444',margin:'0 0 12px'}}>Escrow • Mada • Apple Pay • STC Pay</p>
            <div style={{display:'flex',gap:8}}>
              <Link href={`/seller?lang=${lang}`} className="btn btn-primary">{t.sell}</Link>
              <Link href={`/categories?lang=${lang}`} className="btn">{t.browse}</Link>
            </div>
          </div>
          <div className="grid grid-4">
            {products.slice(0,4).map(p=>(
              <div key={p.id} className="card">
                <img src={p.img} alt="" style={{width:'100%',height:120,objectFit:'cover'}}/>
                <div style={{padding:10,fontWeight:700,whiteSpace:'nowrap',textOverflow:'ellipsis',overflow:'hidden'}}>{p.title}</div>
              </div>
            ))}
          </div>
        </section>

        <section style={{marginTop:28}}>
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:8}}>
            <h2 style={{fontSize:18,fontWeight:800}}>{t.trending}</h2>
            <Link href={`/categories?lang=${lang}`} style={{color:'#666'}}>{t.browse}</Link>
          </div>
          <div className="grid grid-4">
            {products.map(p=>(
              <div key={p.id} className="card">
                <img src={p.img} alt="" style={{width:'100%',height:160,objectFit:'cover'}}/>
                <div style={{padding:10}}>
                  <div style={{fontWeight:700,whiteSpace:'nowrap',textOverflow:'ellipsis',overflow:'hidden'}}>{p.title}</div>
                  <div style={{fontWeight:800,marginTop:6}}>{p.price} ر.س</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section style={{marginTop:28}} className="grid" >
          <h2 style={{fontSize:18,fontWeight:800}}>{t.why}</h2>
          <div className="grid" style={{gridTemplateColumns:'repeat(3,1fr)'}}>
            <div className="card" style={{padding:14}}><b>🔒 {t.escrow}</b><div style={{color:'#555'}}>المبلغ يُحجز حتى استلامك المنتج.</div></div>
            <div className="card" style={{padding:14}}><b>💳 {t.pay}</b><div style={{color:'#555'}}>مدى، Apple Pay، STC Pay عبر مزوّد معتمد.</div></div>
            <div className="card" style={{padding:14}}><b>🚚 {t.ship}</b><div style={{color:'#555'}}>شحن موثوق وتتبع.</div></div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">© {new Date().getFullYear()} Sn3a • صَنْعَة</div>
      </footer>
    </div>
  )
}
