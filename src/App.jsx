import { useEffect, useMemo, useState } from 'react'
import { profil, karya, pengabdian } from './data'

const TABS = [['profil', 'Profil'], ['karya', 'Karya'], ['pengabdian', 'Pengabdian']]
const getTab = () => {
  const h = location.hash.slice(1)
  return TABS.some(t => t[0] === h) ? h : 'profil'
}
const meta = it => (it.penerbit ? `${it.penerbit}, ${it.tahun}` : `${it.tanggal}, ${it.lokasi}`)

function Pic({ src, alt, n = 0, ratio }) {
  const style = ratio ? { aspectRatio: ratio } : undefined
  if (src) return <img className="pic" src={src} alt={alt} loading="lazy" style={style} />
  return <div className="pic ph" role="img" aria-label={alt} style={{ ...style, '--n': n % 5 }} />
}

function Head({ judul, sub }) {
  return (
    <header className="head">
      <h2>{judul}</h2>
      <p>{sub}</p>
    </header>
  )
}

function Lightbox({ items, index, onClose, onGo }) {
  const it = items[index]
  useEffect(() => {
    const k = e => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') onGo(1)
      if (e.key === 'ArrowLeft') onGo(-1)
    }
    addEventListener('keydown', k)
    return () => removeEventListener('keydown', k)
  }, [onClose, onGo])

  return (
    <div className="lb" role="dialog" aria-modal="true" aria-label={it.judul} onClick={onClose}>
      <figure onClick={e => e.stopPropagation()}>
        <Pic src={it.gambar} alt={it.judul} n={index} ratio={it.rasio || '4/3'} />
        <figcaption>
          <h3>{it.judul}</h3>
          <p>{meta(it)}</p>
          {it.deskripsi && <p>{it.deskripsi}</p>}
        </figcaption>
      </figure>
      <button className="lb-x" onClick={onClose}>Tutup</button>
      {items.length > 1 && (
        <>
          <button className="lb-n prev" aria-label="Sebelumnya" onClick={e => { e.stopPropagation(); onGo(-1) }}>‹</button>
          <button className="lb-n next" aria-label="Berikutnya" onClick={e => { e.stopPropagation(); onGo(1) }}>›</button>
        </>
      )}
    </div>
  )
}

function Profil() {
  return (
    <section className="hero">
      <div>
        <p className="status">{profil.status}</p>
        <h1>
          <span>Halo, aku</span>
          <span>{profil.nama}.</span>
        </h1>
        <p className="peran">{profil.peran}</p>
        <p className="tagline">{profil.tagline}</p>
        <div className="cta">
          <a className="btn solid" href="#karya">Lihat karya</a>
          <a className="btn" href="#pengabdian">Lihat pengabdian</a>
        </div>
      </div>
      <div className="hero-photo">
        <Pic src={profil.foto} alt={`Foto ${profil.nama}`} />
      </div>
      <div className="about">
        <div>{profil.bio.map((p, i) => <p key={i}>{p}</p>)}</div>
        <dl>
          {profil.info.map(([k, v]) => (
            <div key={k}><dt>{k}</dt><dd>{v}</dd></div>
          ))}
        </dl>
        <ul className="skills">{profil.keahlian.map(s => <li key={s}>{s}</li>)}</ul>
      </div>
    </section>
  )
}

function Karya() {
  const kategori = useMemo(() => ['Semua', ...new Set(karya.map(k => k.kategori))], [])
  const [f, setF] = useState('Semua')
  const [open, setOpen] = useState(null)
  const list = karya.filter(k => f === 'Semua' || k.kategori === f)

  return (
    <section>
      <Head judul="Karya" sub={`${list.length} sertifikat`} />
      <div className="chips" role="group" aria-label="Filter kategori">
        {kategori.map(k => (
          <button key={k} className={k === f ? 'on' : ''} aria-pressed={k === f} onClick={() => setF(k)}>{k}</button>
        ))}
      </div>
      <ul className="certs">
        {list.map((k, i) => (
          <li key={k.id}>
            <button onClick={() => setOpen(i)}>
              <Pic src={k.gambar} alt={k.judul} n={i} ratio="4/3" />
              <strong>{k.judul}</strong>
              <span>{meta(k)}</span>
            </button>
          </li>
        ))}
      </ul>
      {open !== null && (
        <Lightbox items={list} index={open} onClose={() => setOpen(null)} onGo={d => setOpen(i => (i + d + list.length) % list.length)} />
      )}
    </section>
  )
}

function Pengabdian() {
  const [open, setOpen] = useState(null)
  return (
    <section>
      <Head judul="Pengabdian" sub={`${pengabdian.length} kegiatan`} />
      <ul className="wall">
        {pengabdian.map((p, i) => (
          <li key={p.id}>
            <button onClick={() => setOpen(i)}>
              <Pic src={p.gambar} alt={p.judul} n={i} ratio={p.rasio} />
              <strong>{p.judul}</strong>
              <span>{meta(p)}</span>
            </button>
          </li>
        ))}
      </ul>
      {open !== null && (
        <Lightbox items={pengabdian} index={open} onClose={() => setOpen(null)} onGo={d => setOpen(i => (i + d + pengabdian.length) % pengabdian.length)} />
      )}
    </section>
  )
}

export default function App() {
  const [tab, setTab] = useState(getTab)
  useEffect(() => {
    const f = () => { setTab(getTab()); scrollTo(0, 0) }
    addEventListener('hashchange', f)
    document.title = `${profil.nama} - Portofolio`
    return () => removeEventListener('hashchange', f)
  }, [])
  const Page = { profil: Profil, karya: Karya, pengabdian: Pengabdian }[tab]

  return (
    <>
      <nav className="nav" aria-label="Menu utama">
        {TABS.map(([id, l]) => (
          <a key={id} href={`#${id}`} aria-current={tab === id ? 'page' : undefined}>{l}</a>
        ))}
      </nav>
      <main key={tab}><Page /></main>
      <footer>© {new Date().getFullYear()} {profil.nama}</footer>
    </>
  )
}
